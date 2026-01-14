import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class BOJ_11724 {

    // 각 정점과 연결된 정점들을 저장할 인접 리스트
    static ArrayList<Integer>[] graph;

    // 각 정점의 방문 여부를 체크하는 배열
    static boolean[] visited;

    public static void main(String[] args) throws IOException {

        // 빠른 입력을 위한 BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫 줄 입력: 정점 개수(n), 간선 개수(m)
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken()); // 정점의 개수
        int m = Integer.parseInt(st.nextToken()); // 간선의 개수

        // 인접 리스트 배열 생성 (1번 정점부터 사용)
        graph = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>(); // 각 정점마다 리스트 생성
        }

        // 방문 배열 초기화
        visited = new boolean[n + 1];

        // 간선 입력 (무방향 그래프)
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());

            int u = Integer.parseInt(st.nextToken()); // 간선의 한쪽 정점
            int v = Integer.parseInt(st.nextToken()); // 간선의 다른쪽 정점

            // 무방향 그래프이므로 양쪽에 모두 추가
            graph[u].add(v);
            graph[v].add(u);
        }

        int count = 0; // 연결 요소 개수

        // 모든 정점을 순회
        for (int i = 1; i <= n; i++) {

            // 아직 방문하지 않은 정점을 발견했다면
            if (!visited[i]) {

                // 해당 정점과 연결된 모든 정점을 DFS로 방문 처리
                dfs(i);

                // DFS를 한 번 시작했다는 것은
                // 새로운 연결 요소를 하나 찾았다는 의미
                count++;
            }
        }

        // 연결 요소 개수 출력
        System.out.println(count);
    }

    // 깊이 우선 탐색(DFS)
    static void dfs(int v) {

        // 현재 정점을 방문 처리
        visited[v] = true;

        // 현재 정점과 연결된 모든 정점 탐색
        for (int next : graph[v]) {

            // 아직 방문하지 않은 정점만 탐색
            if (!visited[next]) {
                dfs(next); // 재귀적으로 계속 탐색
            }
        }
    }
}