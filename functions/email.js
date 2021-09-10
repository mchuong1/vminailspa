// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

module.exports.handler = async (event) => {
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  const { name, message, email } = JSON.parse(event.body);
  const msg = {
    to: 'vminailspa@gmail.com', // Change to your recipient
    from: 'support@vnminailspa.com', // Change to your verified sender
    subject: `Get in Touch: ${name}`,
    text: `${message} - Reply back to ${email}`,
  };

  console.log(`Attempting to send Email: ${name} ${email} ${message}`);
  console.log(`API Key is ${process.env.REACT_APP_SENDGRID_API_KEY}`)

  sgMail
    .send(msg)
    .then((response) => {
      console.log('Email sent', response);
    })
    .catch((error) => {
      console.error(error);
      return {
        status: 500,
        body: error,
      };
    });

  console.log(`Email Successfully Sent!`)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: 'Email sent',
  };
};
