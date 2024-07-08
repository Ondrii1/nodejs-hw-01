const fs = require('fs');
const path = require('path');
const { PATH_DB } = require('../constants/contacts');
const { createFakeContact } = require('../utils/createFakeContact');

function addOneContact() {
  const dbPath = path.resolve(__dirname, '..', PATH_DB);
  const contacts = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  contacts.push(createFakeContact());

  fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2));
}

addOneContact();
