import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava{
    public ArrayList<Integer> getTenRolls() {
    	ArrayList<Integer> randomTenRolls = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++){
            Random rnd=new Random();
            Integer x=rnd.nextInt(20)+1;
            randomTenRolls.add(x);
        }
        return randomTenRolls;
    }
    public char getRandomLetter() {
        char[] LowerCaseAlphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        Random rnd=new Random();
        Integer x=rnd.nextInt(20)+1;
        char letter=LowerCaseAlphabet[x];
        return letter;
    }
    public String generatePassword() {
       String password=new String();
       for (int i = 0; i < 8; i++){
            password+= getRandomLetter();
        }
        return password;
    }
    public ArrayList<String> getNewPasswordSet(int Loop) {
       ArrayList<String> randomPasswordSet = new ArrayList<String>();
       for (int i = 0; i< Loop ; i++){
            randomPasswordSet.add(generatePassword());
        }
        return randomPasswordSet;
    }
}
