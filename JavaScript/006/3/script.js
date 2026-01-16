const students = [];
const form = document.getElementById('student-form');

const list = document.createElement('ul');
form.insertAdjacentElement('afterend', list);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const student = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        age: Number(form.age.value),
    };

    students.push(student);
    console.log(students);

    const item = document.createElement('li');
    item.textContent = `${student.firstName} ${student.lastName}, ${student.age}`;
    list.appendChild(item);

    form.reset();
    form.firstName.focus();
});
