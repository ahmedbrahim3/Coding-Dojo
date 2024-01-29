
public class Gorilla extends Mammal {
	public Gorilla() {
		super();
		
	}
	public void throwSomething() {
		this.setEnergy(getEnergy()-5);
		System.out.println("Gorilla thrown a banana peel \n");		
	}
	public void eatBananas() {
		this.setEnergy(getEnergy()+10);
		System.out.println("Gorilla is happy \n");		
	}
	public void climb() {
		this.setEnergy(getEnergy()-10);
		System.out.println("Gorilla has climbed a tree \n");		
	}
}
