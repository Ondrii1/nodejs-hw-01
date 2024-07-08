const fs = require('fs');
const path = require('path');
const { PATH_DB } = require('../constants/contacts');

function removeLastContact() {
  const dbPath = path.resolve(__dirname, '..', PATH_DB);
  const contacts = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (contacts.length > 0) {
    contacts.pop();
    fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2));
  }
}

removeLastContact();
