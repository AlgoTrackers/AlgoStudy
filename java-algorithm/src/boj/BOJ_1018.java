import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_1018 {

    static int N, M;
    static char[][] board;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        board = new char[N][M];

        // 체스판 입력
        for (int i = 0; i < N; i++) {
            board[i] = br.readLine().toCharArray();
        }

        int answer = Integer.MAX_VALUE;

        // 모든 8x8 시작점 탐색
        for (int i = 0; i <= N - 8; i++) {
            for (int j = 0; j <= M - 8; j++) {
                answer = Math.min(answer, repaintCount(i, j));
            }
        }

        System.out.println(answer);
    }

    // (x, y)를 시작점으로 하는 8x8 보드에서 최소 칠하기 횟수
    static int repaintCount(int x, int y) {

        int countW = 0; // W로 시작하는 경우
        int countB = 0; // B로 시작하는 경우

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {

                char current = board[x + i][y + j];

                // (i + j)가 짝수면 시작 색과 같아야 함
                if ((i + j) % 2 == 0) {
                    if (current != 'W') countW++;
                    if (current != 'B') countB++;
                }
                // 홀수면 반대 색
                else {
                    if (current != 'B') countW++;
                    if (current != 'W') countB++;
                }
            }
        }

        return Math.min(countW, countB);
    }
}