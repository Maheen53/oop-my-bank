#! /usr/bin/env node
// class
class Bankaccount {
    accountBalance;
    constructor(accountblance) {
        this.accountBalance = accountblance;
    }
    // publlically credit
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log(`Credit sucessfully get into new account and your balance is: ${this.accountBalance}`);
        }
        else {
            console.log("Credit unsucessfull!!!");
        }
    }
    // publlicaly debit
    debit(amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log(`Debits sucessfully share in new account balance ${this.accountBalance}`);
        }
        else {
            console.log("Debit unsucessfully");
        }
    }
}
class Customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        // this property utilization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    // public user acces
    display() {
        console.log("Name: " + this.person.firstName + " " + this.person.lastName);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile Number: " + this.mobile_number);
        console.log("Amount In bank: " + this.bankaccount.accountBalance);
        console.log();
    }
}
const a1 = new Bankaccount(800);
const c1 = new Customer({ firstName: "Anousha", lastName: "Baig" }, 21, "female", 4343434333, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(500);
const c2 = new Customer({ firstName: "maheen", lastName: "imtiaz" }, 21, "female", 4343434333, a2);
c2.display();
c2.bankaccount.debit(200);
console.log();
export {};
