function upper(strings, ...values) {
    return strings.toUpperCase();
}

var name = 'Nguyen Van A',
account = 'ANV',
classname = 'Fresher FrontEnd';

console.log(
`Hello ${upper(name)} (@${account}), welcome to the ${upper(classname)}!!!` ===
'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);
