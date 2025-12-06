import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_1259 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String s = br.readLine();

            if(s.equals("0")) {
                break;
            }

            String reverse = new StringBuilder(s).reverse().toString();

            if(s.equals(reverse)) {
                System.out.println("yes");
            } else {
                System.out.println("no");
            }
        }


    }
}
