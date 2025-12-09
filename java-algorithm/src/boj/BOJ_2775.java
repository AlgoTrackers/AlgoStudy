import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_2775 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int test = Integer.parseInt(br.readLine());

        for (int i = 0; i < test; i++) {
            int floor = Integer.parseInt(br.readLine()); // 층
            int unit = Integer.parseInt(br.readLine()); // 호

            int[][] people = new int[floor+1][unit]; // 각 층의 사람 수

            // 0층은 j호는 j명
            for (int j = 0; j < unit; j++) {
                people[0][j] = j+1;
            }

            for (int j = 1; j <= floor; j++) { // 층
                for (int k = 1; k <= unit; k++) { //호

                    int sum = 0; // 자신의 아래층의 k호 사람들의 인원 합

                    for (int l = 0; l < k; l++) {
                        sum += people[j-1][l];
                    }
                    people[j][k-1] = sum;
                }
            }
            System.out.println(people[floor][unit-1]);
        }
    }
}
