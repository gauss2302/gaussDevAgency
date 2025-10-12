// api/contact.ts
import { Resend } from 'resend'

const RESEND_API_KEY = 're_JqB6vXYt_MVfb65wEuUzJKx9tzB7c9HE6'
const CONTACT_TO = 'shilov6865@gmail.com'
const CONTACT_FROM = 'https://66b66bb7f706.ngrok-free.app/contact'

const resend = new Resend(RESEND_API_KEY)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const body = parseContactPayload(req.body)

    // anti-bot
    if (body.honeypot?.trim()) return res.status(200).json({ ok: true, bot: true })
    if (body.startedAt && Date.now() - body.startedAt < 1500)
      return res.status(200).json({ ok: true, tooFast: true })

    const { error } = await resend.emails.send({
      to: CONTACT_TO!,
      from: CONTACT_FROM!,
      subject: `New contact from ${body.name}`,
      // reply_to: body.email, // user’s own email
      html: `<p><b>Name:</b> ${esc(body.name)}</p>
             <p><b>Email:</b> ${esc(body.email)}</p>
             <p style="white-space:pre-wrap">${esc(body.message)}</p>`,
    })

    if (error) {
      console.error(error)
      return res.status(500).json({ ok: false, error: 'Email failed' })
    }

    return res.status(200).json({ ok: true }) // ← always JSON
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
  if (trimmed.length < min) throw badInput(`Field "${key}" must be at least ${min} characters long`, { field: key })
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
  if (!emailRegex.test(normalized)) throw badInput('Field "email" must be a valid email address', { field: 'email' })
  return normalized
}

function badInput(message: string, details: Record<string, unknown> = {}) {
  return { code: 'BAD_INPUT', message, details }
}
