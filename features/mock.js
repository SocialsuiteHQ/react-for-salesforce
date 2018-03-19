/* eslint no-unused-vars: 0 */

let contacts = [
    { Id: 1, Name: 'Lisa Taylor' },
    { Id: 2, Name: 'Joe Smith' },
    { Id: 3, Name: 'Chloe Miller' },
    { Id: 4, Name: 'Luis Vasquez' },
    { Id: 5, Name: 'Alex Wong' }
];

let dataService = {
    findAll(callback) {
        callback(contacts);
    },
    findByName(name, callback) {
        let filtered = contacts.filter(contact => contact.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
        callback(filtered);
    },
    navigateToSObject(id) {
        console.log(`Navigating to ${id}`);
    }
};
