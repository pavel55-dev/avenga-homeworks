const firstName = document.getElementById('first-name');;
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const submitButton = document.getElementById('save-button');

function createUserProfile(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}