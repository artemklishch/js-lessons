const  sortContacts = (contacts, trueOrFalse = true) => {
    if(!Array.isArray(contacts)) return null;
    return contacts
		.sort((a,b) => trueOrFalse === true ?
            a.name.localeCompare(b.name) :
            b.name.localeCompare(a.name));
};