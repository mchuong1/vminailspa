const mailgun = require('mailgun-js');

module.exports.handler = async (event) => {
  const { name, message, email } = JSON.parse(event.body);
  const DOMAIN = 'vnminailspa.com';
  const mg = mailgun({
    apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
    domain: DOMAIN,
  });
  const data = {
    from: 'V&Mi Nail Spa <support@vnminailspa.com>',
    to: 'vminailspa@gmail.com',
    subject: 'Hello',
    text: `${name} Testing some Mailgun awesomness! ${message} ${email}`,
  };
  mg.messages().send(data, (error, body) => {
    if (error) console.error(error);
    else console.log(body);
  });
  return {
    statusCode: 200,
    body: 'Email Sent Successfully',
  };
};
