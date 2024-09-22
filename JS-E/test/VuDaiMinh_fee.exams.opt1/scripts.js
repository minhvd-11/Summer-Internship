let studentArr = [
    {
        firstName: "Tran Thi Minh",
        lastName: "Thuy",
        studentCode: "B16DCXXYYY"
    },
    {
        firstName: "Le Thuy",
        lastName: "Trang",
        studentCode: "B17DCXXYYY"
    },
    {
        firstName: "Vu Thanh",
        lastName: "Loan",
        studentCode: "B18DCXXYYY"
    },
    {
        firstName: "Dam Thi",
        lastName: "Thu",
        studentCode: "B19DCXXYYY"
    }
];
const addButton = document.getElementById('add');

renderStudentTable();
document.getElementById('add').addEventListener('click', function (event) {
    event.preventDefault();
    addStudent();
});

let studentCodeCounter = 1;

function addStudent() {
    addButton.innerText = '+ Add';
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const studentCode = document.getElementById('studentCode').value;
    const student = {
        studentCode,
        lastName,
        firstName,
        id: studentCodeCounter++,
    };

    studentArr.push(student);
    renderStudentTable();
    document.getElementById('studentForm').reset();
}

function renderStudentTable() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';

    studentArr.forEach((student, index) => {
        student.id = index;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.lastName}</td>
            <td>${student.firstName}</td>
            <td>${student.studentCode}</td>
            <td>
                <button id="edit" style="background-color: blue" onclick="editStudent(${student.id})">Edit</button>
                <button id="delete" style="background-color: red" onclick="deleteStudent(${student.id})">Del</button>
            </td>
        `;

        tbody.appendChild(row);
    });
    console.log(studentArr);
}


function editStudent(id) {
    const student = studentArr.find(stu => stu.id === id);
    if (student) {
        document.getElementById('lastName').value = student.lastName;
        document.getElementById('firstName').value = student.firstName;
        document.getElementById('studentCode').value = student.studentCode;
        const addButton = document.getElementById('add');
        addButton.innerText = "Save";
        deleteStudent(id);
    }
}

function deleteStudent(id) {
    studentArr = studentArr.filter(stu => stu.id !== id);
    console.log(studentArr);
    console.log(id);
    renderStudentTable();
}
