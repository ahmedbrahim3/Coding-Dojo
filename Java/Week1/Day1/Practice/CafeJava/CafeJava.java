public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double myPrice = 6.3;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1 + pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(generalGreeting + customer2 + pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer1 + readyMessage + displayTotalMessage +myPrice); // Displays "Welcome to Cafe Java, Cindhuri"
        // System.out.println(generalGreeting + customer1 + pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"

    }
}
