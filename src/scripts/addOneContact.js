
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact} from'../utils/createFakeContact.js';

export const addOneContact = async () => {
    try{
       let data = await fs.readFile(PATH_DB, 'utf-8');
       const contacts = JSON.parse(data);
       const newContact = createFakeContact();

       contacts.push(newContact);
       await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error){
        console.log(error);
    }
};

await addOneContact();