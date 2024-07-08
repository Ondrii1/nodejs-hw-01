const fs = require('fs');
const path = require('path');
const { PATH_DB } = require('../constants/contacts');

function getAllContacts() {
  const dbPath = path.resolve(__dirname, '..', PATH_DB);
  const contacts = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  console.log(contacts);
}

getAllContacts();
