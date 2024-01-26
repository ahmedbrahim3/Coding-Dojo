import java.util.ArrayList;
import java.util.Arrays;
public class CafeUtil{
    
    public int getStreakGoal() {
        // You do not need to code here, this is an example method
        int sum =1+2+3+4+5+6+7+8+9+10;
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        // You do not need to code here, this is an example method
        double total = 0;
        for (int i = 0; i < prices.length; i++){
            total+=prices[i];
        }
        return total;
    }

    public void displayMenu(ArrayList<String>menuItems) {
        // You do not need to code here, this is an example method
        for (int i = 0; i < menuItems.size(); i++){
            System.out.printf(i+" %s \n",menuItems.get(i));
        }
    
    }

    public void addCustomer(ArrayList<String>customers) {
        // You do not need to code here, this is an example method
            System.out.println("Please enter your name:");
            String username = System.console().readLine();
            System.out.printf("Hello, %s ! \n",username);
            System.out.printf("There are %s people in front of you \n",customers.size());
            customers.add(username);
            System.out.println(customers);

    }
}