const formData = require('form-data');
const Mailgun = require('mailgun.js');

const sendEmail = async (event) => {
  const { name, message, email } = JSON.parse(event.body);
  const DOMAIN = 'vnminailspa.com';

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.REACT_APP_MAILGUN_API_KEY,
  });

  const data = {
    from: 'V&Mi Nail Spa <support@vnminailspa.com>',
    to: 'business.mchuong@gmail.com',
    subject: `Get In Touch with ${name}`,
    text: `${message} reply back to ${email}`,
  };

  console.log('About to send email with data', data);

  const result = await mg.messages
    .create(DOMAIN, {
      from: 'V&Mi Nail Spa <support@vnminailspa.com>',
      to: 'business.mchuong@gmail.com',
      subject: `Get In Touch with ${name}`,
      text: `${message} reply back to ${email}`,
    })
    .then((msg) => msg)
    .catch((err) => err);

  console.log(result);

  return result;
};

module.exports.handler = async (event) => {
  const result = await sendEmail(event);
  return {
    statusCode: result.status || 200,
    body: JSON.stringify(result),
  };
};
