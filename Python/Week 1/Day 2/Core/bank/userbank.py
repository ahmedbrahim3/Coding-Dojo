class BankAccount:
    def __init__(self, interest_rate, initial_balance=0):
        self.balance = initial_balance
        self.interest_rate = interest_rate

    def deposit(self, amount):
        self.balance += amount
        print(f"Your balance is {self.balance}")
        return self

    def withdraw(self, amount):
        self.balance -= amount
        print(f"Your balance is {self.balance}")
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            interest_earned = self.balance * self.interest_rate
            self.balance += interest_earned
            print(f"Interest Earned: ${interest_earned}")
        else:
            print("No interest earned on negative balance.")
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = []
    
    def add_account(self, interest_rate=0.02, initial_balance=0):
        new_account = BankAccount(interest_rate=interest_rate, initial_balance=initial_balance)
        self.accounts.append(new_account)
        return self

    def make_withdrawal(self, account_index, amount):
            self.accounts[account_index].withdraw(amount)
            return self
    def display_account_info(self, account_index):
       
            # Call the display_account_info method of the specified account
            self.accounts[account_index].display_account_info()
            return self


user = User("John Doe", "john@example.com")

# Access the display_account_info method

user.add_account()
user.make_withdrawal(0, 350)
user.display_account_info(0)