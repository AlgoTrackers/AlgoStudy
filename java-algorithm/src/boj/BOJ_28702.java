import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_28702 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] pz = new String[3];

        for (int i = 0; i < 3; i++) {
            pz[i] = br.readLine();
        }

        for(int i = 0; i < 3; i++){
            if(pz[i].equals("Fizz") || pz[i].equals("Buzz") || pz[i].equals("FizzBuzz")){

            } else{
                int num = Integer.parseInt(pz[i]) + (3 - i);
                if(num % 3 == 0 && num % 5 == 0){
                    System.out.println("FizzBuzz");
                } else if(num % 3 == 0){
                    System.out.println("Fizz");
                } else if(num % 5 == 0){
                    System.out.println("Buzz");
                } else {
                    System.out.println(Integer.parseInt(pz[i]) + (3 - i));
                }
                break;
            }
        }


    }
}
