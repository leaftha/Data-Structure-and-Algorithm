function solution(routes) {
    var answer = 0;
    routes.sort((a, b) => a[1] - b[1]);

    let idx = routes[0][1];
    answer++;
    for (let i = 0; i < routes.length; i++) {
        if (routes[i][0] <= idx && routes[i][1] >= idx) {
            continue;
        } else {
            idx = routes[i][1];
            answer++;
        }
    }

    return answer;
}
