function solution(genres, plays) {
    var answer = [];
    let hash = {};
    let addG = {};

    for (let i = 0; i < genres.length; i++) {
        if (hash[genres[i]]) {
            addG[genres[i]] += plays[i];
            hash[genres[i]].push([plays[i], i]);
        } else {
            hash[genres[i]] = [[plays[i], i]];
            addG[genres[i]] = plays[i];
        }
        hash[genres[i]].sort((a, b) => b[0] - a[0]);
    }
    const sorted = Object.entries(addG).sort((a, b) => b[1] - a[1]);

    for (let i of sorted) {
        for (let j = 0; j < 2; j++) {
            let a = hash[i[0]].shift();
            if (a != undefined) {
                answer.push(a[1]);
            }
        }
    }
    return answer;
}
