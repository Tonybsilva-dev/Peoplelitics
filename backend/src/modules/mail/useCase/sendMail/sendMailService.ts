import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

class SendMailService {

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
      from: "Peoplelitics <noreplay@peoplelitics.com.br>"
    })

    console.log('Message sent: %s', message.messageId);
  }

}

export { SendMailService };
