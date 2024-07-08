const fs = require('fs');
const path = require('path');
const { PATH_DB } = require('../constants/contacts');
const { createFakeContact } = require('../utils/createFakeContact');

function generateContacts(count) {
  const dbPath = path.resolve(__dirname, '..', PATH_DB);
  const contacts = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }

  fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2));
}

const count = parseInt(process.argv[2], 10) || 5;
generateContacts(count);
