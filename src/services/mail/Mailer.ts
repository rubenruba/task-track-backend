import nodemailer, { Transporter } from "nodemailer";
import { Email } from "../../VO/Email";
import { readFile } from "fs/promises";
import Handlebars from "handlebars";

export class Mailer {
    private _transporter: Transporter;
    private _emailFrom: string | undefined;
    private _pass: string | undefined;
    private _emailTo: Email;
    private _logoAttachment: object;

    constructor(emailTo: string) {
        this._emailFrom = process.env.NODEMAILER_EMAIL;
        this._pass = process.env.NODEMAILER_PASSWORD;
        this._emailTo = new Email(emailTo);
        this._transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            from: this._emailFrom,
            auth: {
                user: this._emailFrom,
                pass: this._pass,
            },
        });
        this._logoAttachment = {
            filename: 'logo.png',
            path: 'src/services/mail/templates/logo.png',
            cid: 'logo',
        };
    }

    async verifyEmail(verifyCode: string, userId: string) {
        try {
            const html = await readFile('src/services/mail/templates/verifyEmail.handlebars', { encoding: 'utf-8' });
            const template = Handlebars.compile(html);
            await this._transporter.sendMail({
                from: this._emailFrom,
                to: this._emailTo.value,
                subject: 'Verification Email',
                html: template({ link: verifyCode, userId: userId }),
                attachments: [this._logoAttachment],
            });
        } catch (err) {
            console.log('Verification email error: ', err);
        }
    }

    async sendWelcome(username: string) {
        try {
            const html = await readFile('src/services/mail/templates/welcome.handlebars', { encoding: 'utf-8' });
            const template = Handlebars.compile(html);
            await this._transporter.sendMail({
                from: this._emailFrom,
                to: this._emailTo.value,
                subject: 'Welcome to Task Track !!',
                html: template({ user: username }),
                attachments: [this._logoAttachment],
            });
        } catch (err) {
            console.log("Welcome email error: ", err);
        }
    }

    async resetPassword(newPassword: string) {
        try {
            const html = await readFile('src/services/mail/templates/welcome.handlebars', { encoding: 'utf-8' });
            const template = Handlebars.compile(html);
            await this._transporter.sendMail({
                from: this._emailFrom,
                to: this._emailTo.value,
                subject: 'Reset Password',
                html: template({ password: newPassword }),
                attachments: [this._logoAttachment],
            });
        } catch (err) {
            console.log('Reset password email error: ', err)
        }
    }
}