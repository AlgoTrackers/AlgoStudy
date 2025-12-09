import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_14626 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String s = br.readLine();
        char[] arr = s.toCharArray();

        int sum = 0;  // '*' 을 제외한 모든 숫자들의 누적합
        int starIndex = -1; // '*' 이 있는 위치

        // * 위치 찾기 + 기존 숫자 합 구하기
        for (int i = 0; i < 13; i++) {
            if (arr[i] == '*') {
                starIndex = i;
                continue;
            }

            // 문자 숫자를 정수로 변환
            int digit = arr[i] - '0';

            if (i % 2 == 0) sum += digit;      // arr[i]
            else sum += digit * 3;            // arr[i]*3
        }

        // * 자리의 곱할 수 구하기
        int weight = (starIndex % 2 == 0) ? 1 : 3;

        // 0~9 중 어떤 숫자가 들어가야 sum % 10 == 0 되는지 찾기
        for (int x = 0; x <= 9; x++) {
            if ((sum + x * weight) % 10 == 0) {
                System.out.println(x);
                break;
            }
        }
    }
}
