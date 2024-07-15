import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch(error){
        console.log(error);
        return 0;
    }
    
};

console.log(await countContacts());