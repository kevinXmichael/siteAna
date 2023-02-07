## Sending Emails

1. In `contact.svelte` I send the form with `use:enhance` to the backend (`routes/api/emails`)
2. In `+server.ts` this is just standard nodemailer code and you can customize `from, to, subject, html`
3. Create your `sendinblue` account and add your `SMTP_ENDPOINT, SMTP_PASSWORD, SMTP_USERNAME` to your local `.env` file (just copy your `.env.example` for that)

## DaisyUI

What is the actual problem here? I gave you some code before where fetching data with strapi works, or not?

## Responsiveness Bug

This is really a lot of work, the structure with w-1/2 and left/right components in a row is not a good pattern. For that you should use a Grid Layout and use grid-cols-1 for small devices and grid-cols-2 on all larger devices: https://tailwindcss.com/docs/grid-template-columns