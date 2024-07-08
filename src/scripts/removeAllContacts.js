const fs = require('fs');
const path = require('path');
const { PATH_DB } = require('../constants/contacts');

function removeAllContacts() {
  const dbPath = path.resolve(__dirname, '..', PATH_DB);
  fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
}

removeAllContacts();
