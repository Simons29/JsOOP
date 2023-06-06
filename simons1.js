// class Employee {                 

// }

// let dsd = new Employee;
// console.log(dsd);          Первый номер 1-2


// class Employee {                 

// }
    
//  let biba = new Employee;
//  biba.name = 'Semen';
//  biba.age = '18';
//  biba.salary = '132.000';
//  console.log(biba.name);
//  console.log(biba.age);
//  console.log(biba.salary);     Второй номер 1-2


// class Employee {

// }

// let kek1 = new Employee
// let kek2 = new Employee
// let kek3 = new Employee

// kek1.name = 'Semen'
// kek1.salary = '74'
// kek2.name = 'Kost9'
// kek2.salary = '80'
// kek3.name = 'Gleb'
// kek3.salary = '75'

// console.log(Employee)
// console.log(kek1.salary + kek2.salary + kek3.salary)       Второй номер 3


// class Employee {
//     show () {
//      return '+++';
//     }
// }
// let ban = new Employee
// console.log(ban.show());     Третий номер 1


// class Employee {
//     show(name, salary) {
//         return name + '' + salary;
//     }
// }
// let boba = new Employee
// console.log (boba.show('Simons', '74.000'));    Четвертый номер 1


// class Employee {
//     show(){
//         console.log(this.salary)   если поставим This.salary то выведет имя, а так выводит зарплату
//     }
// }
// let bidjo = new Employee
// bidjo.name = 'Semen'
// bidjo.salary = '74.000' 
// bidjo.show ();                Пятый номер 1-3


// class Student{
//     name = 'Semen';
//     surn = 'Yushmanov';
//     show(){
//         console.log(this.cape(this.name) + " " + this.cape(this.surn))
//     }
//     cape(str){
//         return str[0].toUpperCase() + str.slice(1);
//     }
// }

// let student = new Student;
// student.name = 'Vladimir'
// student.surn = 'Samoylov'
// student.show()                    шестой номер 1-3



// class Student {
// 	name = 'Semen';
// 	surn = 'Yushmanov'
//     salary = '123321'
// 	show() {
// 		return this.name;
// 	}
// }
 
// let user = new Student
// console.log(user.name + user.surn + user.salary);  седьмой номер 1-3

// class Employee {
// 	constructor() {
// 		console.log('+++');
// 	}
// }
// new Employee       десятый номер 1


// class Employee {
// 	constructor(name, salary) {
// 		console.log(name + ' ' + salary);
// 	}
// }
// new Employee('Semen', '74.000');  11 номер 1


// class Employee{
//    constructor(name, salary) {
// 		console.log(name + ' ' + salary);
//         this.name = name;
//         this.salary = salary
// 	}
//     show() {
// 		return this.name + ' ' + this.salary;
// 	}
//     more() {
//         return this.salary * 1.1
//     }
// }
// let emp = new Employee('Semen', 74000);
// console.log(emp.more())                           12 номер 1-4


// class Employee {
//     #name 
//     #age 
//     #salary 
// 	constructor(name, age, salary) {
// 		this.name = name;
// 	    this.age = age;
// 	    this.salary = salary;
// 	}
// 	show() {
// 		return (this.name + '' + this.age + '' + this.salary);
// 	}
// }
//     let gfg = new Employee('Semen', '174000', '18')
//     console.log(    gfg.show())                                     13 номер 1-3


// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }                                                    14 номер 1


// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getName() {
// 		return this.name;
// 	}
// 	getSalary() {
// 		return this.salary;
// 	}
// }                                         15 номер 1
 


// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.addSign(this.salary);
// 	}
	
// 	addSign(num) {
// 		return num + '$';
// 	}
// }                                         15 номер 2

// class Employee {
// 	#name;
// 	#salary;
//     #age;
	
// 	constructor(name,salary,age) {
// 		this.#name = name;
// 		this.#salary = salary;
//         this.#age = age;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
//         return this.#age
//     }
// }
// let user = new Employee('john', 100,18);
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());                                  16 номер


// class Employee {
// 	#name;
// 	#surn;
	
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let user = new Employee;
// user.setName('john');
// user.setSurn('smit');
// console.log(user.getName());
// console.log(user.getSurn());                        17 номер


// class Employee {
//     #name;
//     #age;
//     #salary;

//     setName(name) {
//         if (name.length > 0) {
//             this.#name = name;
//         } else {
//             throw new Error('name is incorrect');
//         }
//     }

//     setAge(age) {
//         if (age >= 0 && age <= 120) {
//             this.#age = age;
//         } else {
//             throw new Error('age is incorrect')
//         }
//     }

//     setSalary(salary) {
//         if (salary >= 0) {
//             this.#salary = salary;
//         } else { 
//             throw new Error('salary is incorrect')
//         }
//     }

//     getName() {
//         return this.#name;
//     }

//     getAge() {
//         return this.#age
//     }

//     getSalary() {
//         return `${this.#salary}$`;
//     }
// }

// let user = new Employee();
// user.setName('john');
// user.setAge (18);
// user.setSalary(200);
// console.log(user.getName());
//  console.log(user.getAge());
//  console.log(user.getSalary());                18 номер

// class User {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let user = new User;
// user.setName('john').setSurn('smit');
// console.log(user.getName());
// console.log(user.getSurn());                         19 номер



// 1 - false
// 2- true
// 3 - false
// 4 - false
// 5 - true
// 6 - true
// 7 - true                                                      20 номер


// 1 - true
// 2 - false

// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

// for(let user of users){
//     if (user instanceof Student){
//         console.log(user.name)
//     }
// }	                                                      21 Номер 1-2


// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for (let user of users) {
//     if (user instanceof Employee) {
//       console.log(user.name);
//     }
//   }     