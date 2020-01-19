class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        const email = this.name.split(' ').join('.').toLowerCase() + "@ourcompany.com"
        return email
    }
    getRole() {
        if (this.title === "Employee") {
            return "Employee"
        } else if (this.title === "Engineer") {
            return "Engineer"
        } else if (this.title === "Intern") {
            return "Intern"
        } else if (this.title === "Manager") {
            return "Manager"
        }


    }

}
var employee1 = new Employee("Alex Bonner", 5, "Manager")
employee1.getEmail()
console.log(employee1.getRole())


module.exports = Employee