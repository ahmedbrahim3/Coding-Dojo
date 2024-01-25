import java.util.HashMap;
import java.util.Set;


public class TestHashmatique{
    public static void main (String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("key1 :" , "VALUE1");
        trackList.put("key2 :" , "value2");
        trackList.put("key3 :" , "value3");
        System.out.println(trackList.get(" :"));
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println("-----------"+key);
            System.out.println(trackList.get(key));    
        }
    }
}