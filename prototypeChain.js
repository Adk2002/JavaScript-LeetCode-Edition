const obj = {
    fname: 'Aditya',
    lname: 'Karmakar',
}

function fullname() {
    return `${this.fname} ${this.lname}`;
}

console.log(obj.fullname());