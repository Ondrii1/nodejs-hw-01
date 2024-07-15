import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);
        const remainContacts = contacts.filter(() => Math.random() > 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(remainContacts, null, 2));
    }catch (error){
        console.log(error);
    }
};
await removeLastContact();