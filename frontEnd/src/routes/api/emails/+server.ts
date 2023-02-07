import {SMTP_ENDPOINT, SMTP_PASSWORD, SMTP_USERNAME} from "$env/static/private"
import {error, json} from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

export const POST = (async ({request}) => {
    const formData = await request.formData();
    console.log(formData)
    const site = formData.get("site")
    const email = formData.get("email")
    const name = formData.get("name")
    const fone = formData.get("fone")
    console.log(site, email, name, fone)
    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_ENDPOINT,
            port: 587,
            secure: false,
            auth: {
                user: SMTP_USERNAME,
                pass: SMTP_PASSWORD
            }
        });
        const result = await transporter.sendMail({
            from: 'Ana Display Name <domain@yourmail.com>',
            to: [email],
            subject: "Your subject",
            html: "<b>Hello some HTML here.</b>"
        });
        return json({status: 200, info: `✅ Message sent: ${result.messageId}`});
    } catch (err) {
        throw error(400, {
            message: `❌ Cannot sendEmail: ${err}`
        });
    }
})
