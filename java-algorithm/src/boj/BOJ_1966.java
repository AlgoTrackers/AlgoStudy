import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class BOJ_1966 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int testcases = Integer.parseInt(br.readLine());

        for (int i = 0; i < testcases; i++) {

            String[] input = br.readLine().split(" ");
            int n = Integer.parseInt(input[0]); // 문서의 개수
            int target = Integer.parseInt(input[1]); // 몇번째 문서
            int count = 0; // 언제 인쇄되는지

            String[] info = br.readLine().split(" ");// 문서들의 중요도

            Queue<Integer> q = new LinkedList<>(); // 문서 순서
            PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // 우선순위(내림차순)

            for (int j = 0; j < n; j++) {
                int imp = Integer.parseInt(info[j]); // 해당 문서의 중요도
                q.add(imp); // 문서 순서
                pq.add(imp); // 문서 우선순위 순서
            }

            while (!q.isEmpty() && !pq.isEmpty()) {

                int best = pq.peek(); // 현재 작업 우선순위가 가장 높은 문서
                int current = q.poll(); // 현재 제일 작업순위 1순위 문서

                // 현재 제일 앞에 있는 문서가 우선 순위 제일 높은 문서일때
                if (current == best) {
                    pq.poll(); // 현재 우선 순위 제일 높은 문서 여기서 제거
                    count++;

                    // 타겟이라면
                    if (target == 0) {
                        System.out.println(count);
                        break;
                    } else { // 타겟 아니라면
                        target--; // 순서 앞으로 땡겨짐
                    }
                } else {
                    q.add(current); // 우선순위가 아니므로 뒤로

                    if (target == 0) { // 그게 타겟일때는 순서 업데이트 제일 뒤로
                        target = q.size() - 1;
                    } else { // 타겟 아닐때는 앞으로 땡겨짐
                        target--;
                    }
                }
            }

        }
    }
}
