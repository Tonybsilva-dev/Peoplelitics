import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMessage } from './providers/IMailProvider';


export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL || 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user:  process.env.USER_MAIL || '2a421408adbf1e',
        pass: process.env.PASSWORD_MAIL || '8eda0d0333629e'
      }
    });
  }


  async execute(to: string, subject: string, variables: object, path: string){

    // const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs")
    const templateFileContent = fs.readFileSync(path).toString('utf8')

    const mailTemplateParse = handlebars.compile(templateFileContent)

    const html = mailTemplateParse(variables)

    const message = await this.transporter.sendMail({
      to,
      subject,
      html: html,
      from: "NPS <noreplay@nps.com.br>"
    })

    console.log('Message sent: %s', message.messageId);
    // Pré-visualização disponível apenas ao enviar através de uma conta Ethereal
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));

  }

async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}