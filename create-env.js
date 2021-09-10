const fs = require('fs');

const path = `./.env`;
const vars = `
REACT_APP_SENDGRID_API_KEY=${process.env.REACT_APP_SENDGRID_API_KEY}
`;
fs.writeFileSync(path, vars);
