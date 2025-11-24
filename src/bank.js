class BankAccount {
  #balance = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.totalNumberOfAccounts++; // this doesn't need to be privete
  }

  deposit(amount) {
    this.#balance += amount; // Balance is privete so we need to use #.
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`); //Balance is privete so we need to use #.
    return; // We only need to declare return.
  }

  withdraw(amount) {
    if (amount > this.#balance) { // Balance is privete so we need to use #.
      console.log(`Withdrawal failed. Insufficient funds.`);
      return; // We need this return so if it didn't meet this requirment we return it right away.
    } else {
      this.#balance -= amount; // Balance is privete so we need to use #.
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);// Balance is privete so we need to use #.
      return this.#balance; // We need this inside of the withdraw method. 
    } // Balance is privete so we need to use #.
   
  }

  getBalance() {
    return this.#balance; // We need `this` keyword.
  }

  static getTotalBalance() {
    return BankAccount.this.#balance; // We want to get #balance so we need this now.
  }
}

class Bank {
  static accounts = []; // This is also have to be private, to keep the data safe.

  constructor(name) {
    this.name = name;
    Bank.accounts.push(this)
  }
  
  addAccount(account) {
    // We need to add the name of the class that we are trying to add to it. 
     Bank.accounts.push(account); 
  }

    static getTotalBalance() { // This need to be static for safty reason. 
    let total = 0;
    this.accounts.forEach((account) => {
      total += accounts.balance;
      
    });
     return total;
   
  }

  static findAccount(accountNumber) { // This need to be static for safty reasons. 
    return Bank.accounts.find((account) => account.accountNumber === accountNumber); // We need strict equals for comparison
  } // We have to add Bank class because it's inside of the Bank class. 
}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { BankAccount, Bank };

const myBank = new Bank("First National");
console.log(myBank); // Bank { name: "First National" }

const account1 = new BankAccount("001", "Alice");
const account2 = new BankAccount("002", "Bob");
console.log(account1); // BankAccount { accountNumber: "001", ownerName: "Alice" }
console.log(account2); // BankAccount { accountNumber: "002", ownerName: "Bob" }

// Add accounts to the bank
myBank.addAccount(account1);
myBank.addAccount(account2);
console.log(myBank.accounts);

// Perform deposits and withdrawals
console.log(account1.deposit(100)); // Deposited $100. New Balance: 100
console.log(account1.withdraw(50)); // Withdrew $50. New Balance: 50
console.log(account2.deposit(250)); // Deposited $250. New Balance: 250

// Check total balance of the bank
console.log(myBank.getTotalBalance()); // 300

// Find a specific account by accountNumber
console.log(myBank.findAccount("001").ownerName); // "Alice"
