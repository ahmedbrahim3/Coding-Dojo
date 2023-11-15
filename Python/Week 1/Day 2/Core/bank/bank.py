class BankAccount:
        def __init__(self, interest_rate, initial_balance=0):
            self.balance = initial_balance
            self.interest_rate = interest_rate

        def deposit(self, amount):
            self.balance+=amount
            print(f"your balace is { self.balance}")
            return self
        def withdraw(self, amount) :
            self.balance-=amount
            print(f"your balace is { self.balance}")
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

account1=BankAccount(0.01,100)
account2=BankAccount(0.01,700)
account1.deposit(100).deposit(90).withdraw(80).display_account_info()
account2.deposit(100).deposit(90).withdraw(80).withdraw(180).withdraw(20).yield_interest().display_account_info()