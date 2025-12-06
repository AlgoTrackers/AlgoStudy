import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BOJ_30802 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int people = Integer.parseInt(br.readLine()); // 사람 수

        //티셔츠 사이즈 별 신청자 수
        int[] size = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        // 티셔츠 t장씩, 펜 p 자루씩
        int[] info = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int T = info[0];
        int P = info[1];

        int tshirtBundle = 0;

        // 티셔츠 묶음 계산
        for (int s : size) {

            tshirtBundle += s / T;   // 몫만큼 묶음 추가

            if (s % T != 0) {        // 남는 티셔츠 있으면 묶음 1개 더
                tshirtBundle++;
            }
        }

        System.out.println(tshirtBundle);
        System.out.print(people / P + " " + people % P);

    }
}
