public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1=new BankAccount(1220.5,870.25);
        BankAccount account2=new BankAccount(120.85,1030.4);
        BankAccount account3=new BankAccount(10420.5,25210.3);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.depositCheking(300);
        account1.displayStats();

        account2.depositSavings(500);
        account2.displayStats();

        account3.depositSavings(90);
        account3.displayStats();

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.displayStats();
        account1.withdrawCheking(20.5);
        account1.displayStats();

        account2.displayStats();
        account2.withdrawCheking(130.4);
        account2.displayStats();

        account3.displayStats();
        account3.withdrawCheking(5420.5);
        account3.withdrawSaving(5210.3);
        account3.displayStats();
        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.printf("The number of Bank accounts is: %s \n",BankAccount.getAccounts());
        System.out.printf("The total Money of Bank accounts is: %s \n",BankAccount.getTotalMoney() );

    }
}
