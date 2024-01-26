import java.util.ArrayList;
import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
    Item item1=new Item("kouka",8.5);
    Item item2=new Item("pizza",18.5);
    Item item3=new Item("makloub",14.5);
    Item item4=new Item("baguette",17.5);
        // Order variables -- order1, order2 etc.
        Order order1= new Order();
        Order order2= new Order();
        Order order3= new Order();
        Order order4= new Order();


        order1.name="cindhuri";
        order2.name="Jimmy";
        order3.name="noah";
        order4.name="Sam";


        order1.items.add(item1);
        order.totale+=item1.ptice;
        order2.items.add(item4);
        order.totale+=item4.ptice;
        // Application Simulations
        
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}
