import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BOJ_4153 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {

            int[] arr = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            if (arr[0] == 0) break;

            int max = Arrays.stream(arr).max().getAsInt(); // 제일 긴 변 구하기

            int sum = 0;

            // 나머지 두 변 제곱근 합 구하기
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] != max) {
                    sum += arr[i] * arr[i];
                }
            }

            // (a*a) + (b*b) = c*c
            if (max * max == sum) {
                System.out.println("right");
            } else { // 아닐때
                System.out.println("wrong");
            }
        }
    }
}