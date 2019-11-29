const  sortContacts = (contacts, trueOrFalse) => contacts
		.sort((a,b) => trueOrFalse === true ?
            a.name.localeCompare(b.name) :
            b.name.localeCompare(a.name));