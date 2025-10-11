// api/contact.ts
import { Resend } from 'resend'
import { z } from 'zod'

const RESEND_API_KEY = 're_JqB6vXYt_MVfb65wEuUzJKx9tzB7c9HE6'
const CONTACT_TO = 'shilov6865@gmail.com'
const CONTACT_FROM = 'https://66b66bb7f706.ngrok-free.app/contact'

const resend = new Resend(RESEND_API_KEY)
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  honeypot: z.string().optional(),
  startedAt: z.number().optional(),
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const body = schema.parse(req.body)

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
    if (e?.issues) return res.status(400).json({ ok: false, error: 'Bad input', details: e.issues })
    console.error(e)
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
