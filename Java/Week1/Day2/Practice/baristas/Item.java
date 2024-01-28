public class Item{
  // MEMBER VARIABLES
    private String name;
    private double price;

    public Item(String name, double price){
    this.name = name;
    this.price = price;
    }
  // GETTERS & SETTERS
    public String getName(){
        return this.name;
    }

    public void setName(String newValue){
        this.name = newValue;
    }

    public double getPrice(){
        return this.price;
    }

    public void setPrice(double newValue){
        this.price = newValue;
    }

}