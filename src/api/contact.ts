// api/contact.ts
import { Resend } from 'resend'
import * as dotenv from 'dotenv'

dotenv.config()

// 1) правильный env-ключ
const RESEND_API_KEY = process.env.RESEND_API_KEY
if (!RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is missing')
}

// 2) адреса
// Отправитель ДОЛЖЕН быть с подтверждённого домена (см. чек-лист).
const CONTACT_FROM = process.env.CONTACT_FROM ?? 'Contact <contact@gaussdev.com>'
const CONTACT_TO = process.env.CONTACT_TO ?? 'shilov6865@gmail.com'

const resend = new Resend(RESEND_API_KEY)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    // гарантируем JSON
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const payload = parseContactPayload(body)

    // anti-bot
    if (payload.honeypot?.trim()) return res.status(200).json({ ok: true, bot: true })
    if (payload.startedAt && Date.now() - payload.startedAt < 1500)
      return res.status(200).json({ ok: true, tooFast: true })

    const { error } = await resend.emails.send({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      subject: `New contact from ${payload.name}`,
      replyTo: payload.email, // <-- camelCase
      html: `
        <p><b>Name:</b> ${esc(payload.name)}</p>
        <p><b>Email:</b> ${esc(payload.email)}</p>
        <p style="white-space:pre-wrap">${esc(payload.message)}</p>
      `,
    })

    if (error) {
      console.error(error)
      return res.status(500).json({ ok: false, error: 'Email failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    if (e?.code === 'BAD_INPUT')
      return res.status(400).json({ ok: false, error: 'Bad input', details: e.details })
    console.error(e)
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

type ContactPayload = {
  name: string
  email: string
  message: string
  honeypot?: string
  startedAt?: number
}

function parseContactPayload(raw: unknown): ContactPayload {
  if (!raw || typeof raw !== 'object') throw badInput('Expected JSON object')

  const source = raw as Record<string, unknown>
  const name = pickString(source.name, 'name', 2)
  const email = pickEmail(source.email)
  const message = pickString(source.message, 'message', 5)
  const honeypot = pickOptionalString(source.honeypot)
  const startedAt = pickOptionalNumber(source.startedAt)

  return { name, email, message, honeypot, startedAt }
}

function pickString(value: unknown, key: string, min = 1) {
  if (typeof value !== 'string') throw badInput(`Field "${key}" must be a string`, { field: key })
  const trimmed = value.trim()
  if (trimmed.length < min)
    throw badInput(`Field "${key}" must be at least ${min} characters long`, { field: key })
  return trimmed
}

function pickOptionalString(value: unknown) {
  if (value === undefined || value === null) return undefined
  if (typeof value !== 'string') throw badInput('Optional field must be a string')
  return value
}

function pickOptionalNumber(value: unknown) {
  if (value === undefined || value === null) return undefined
  if (typeof value === 'number') return value
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) throw badInput('Numeric field must be a finite number')
    return parsed
  }
  throw badInput('Numeric field must be a number')
}

function pickEmail(value: unknown) {
  const email = pickString(value, 'email')
  const normalized = email.toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(normalized))
    throw badInput('Field "email" must be a valid email address', { field: 'email' })
  return normalized
}

function badInput(message: string, details: Record<string, unknown> = {}) {
  return { code: 'BAD_INPUT', message, details }
}
