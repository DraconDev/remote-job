"use server";
import { env } from "process";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

// resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "dracsharp@gmail.com",
//     subject: "Hello World",
//     html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });

export async function sendEmail() {
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "dracsharp@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>! 22</p>",
    });
}
