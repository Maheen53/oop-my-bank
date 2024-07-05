#! /usr/bin/env node
interface ibankaccount{
    credit(amount : number) : void
    debit(amount : number) : void 
}
// class
class Bankaccount implements ibankaccount{
    accountBalance : number
    constructor(accountblance : number){
        this.accountBalance = accountblance
    }
    // publlically credit

    public credit(amount: number): void {
        if(amount > 0){
            this.accountBalance += amount
            console.log(`Credit sucessfully get into new account and your balance is: ${this.accountBalance}`);
            
        }
        else{
            console.log("Credit unsucessfull!!!");
            
        }
    }
    // publlicaly debit
     public debit(amount: number): void {
        if(amount > 0 && amount < this.accountBalance){
            this.accountBalance -= amount
            console.log(`Debits sucessfully share in new account balance ${this.accountBalance}`);
            
        }else{
            console.log("Debit unsucessfully");
            
        }
    }
    
}
class Customer{
    person:{
        firstName :string
        lastName : string
    }
    age:number;
    gender:string;
    mobile_number : number;
    bankaccount : Bankaccount
    constructor(person :{firstName :string,lastName : string}, age :number,gender: string,mobile_number : number,bankaccount : Bankaccount){
        // this property utilization
        this.person = person
        this.age = age
        this.gender = gender
        this.mobile_number = mobile_number
        this.bankaccount = bankaccount
    }
    // public user acces
    public display (){
       console.log("Name: "+this.person.firstName+" "+this.person.lastName);
       console.log("Age: "+this.age);
       console.log("Gender: "+this.gender);
       console.log("Mobile Number: "+this.mobile_number);
       console.log("Amount In bank: "+this.bankaccount.accountBalance);
       console.log();
       
       
    }
}
const a1 = new Bankaccount(800)
const c1 = new Customer({firstName:"Anousha",lastName:"Baig"}, 21,"female",4343434333,a1)
c1.display()
c1.bankaccount.debit(500)
console.log();


const a2 = new Bankaccount(500)
const c2 = new Customer({firstName:"maheen",lastName:"imtiaz"}, 21,"female",4343434333,a2)
c2.display()
c2.bankaccount.debit(200)
console.log();