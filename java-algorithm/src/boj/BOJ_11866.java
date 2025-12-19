import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class BOJ_11866 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] ex = br.readLine().split(" ");
        int people = Integer.parseInt(ex[0]); //  사람 수
        int rm = Integer.parseInt(ex[1]); // 제거할 K번째 사람

        Deque<Integer> dq = new ArrayDeque<>();
        StringBuilder sb = new StringBuilder();
        sb.append("<");

        // 사람 수만큼 넣기
        for(int i = 0; i < people; i++){
            dq.addLast(i);
        }

        // 전부 제거될때 까지
        while(!dq.isEmpty()){

            // K번째 바로 전까지는 앞에를 빼고 뒤로 넣기 반복 (원이라서 바뀌는거 x)
            for(int i = 0; i < rm -1 ; i++){
                int temp = dq.removeFirst();
                dq.addLast(temp);
            }

            // 한명만 남아있을때와 아닐때 출력 방식 구별
            if(dq.size() == 1){
                int target = dq.removeFirst() + 1;
                sb.append(target).append(">");
            } else {
                int target = dq.removeFirst() + 1;
                sb.append(target).append(", ");
            }
        }

        System.out.println(sb);
    }
}
