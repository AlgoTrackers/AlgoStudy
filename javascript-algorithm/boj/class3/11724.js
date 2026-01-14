const fs = require('fs');
// 윈도우 환경 테스트 시 'input.txt', 제출 시 '/dev/stdin'
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

// [추가 1] 그래프(인접 리스트) 초기화
// 1번 노드부터 N번 노드까지 쓰기 위해 길이를 N+1로 설정
const graph = Array.from({ length: N + 1 }, () => []);

for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);

  // [추가 2] 무방향 그래프이므로 양쪽 서로 연결
  graph[u].push(v);
  graph[v].push(u);
}

// [추가 3] 방문 체크 배열 및 정답 변수
const visited = new Array(N + 1).fill(false);
let count = 0;

// [추가 4] DFS 함수 정의
const dfs = (node) => {
  visited[node] = true; // 현재 노드 방문 처리

  // 현재 노드와 연결된 다른 노드들을 확인
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

// [추가 5] 1번 노드부터 N번 노드까지 순회하며 연결 요소 개수 세기
for (let i = 1; i <= N; i++) {
  // 아직 방문하지 않은 노드라면 새로운 그룹의 시작점임
  if (!visited[i]) {
    count++; // 그룹 개수 1 증가
    dfs(i);  // 이 그룹에 연결된 모든 노드를 방문 처리해버림
  }
}

console.log(count);