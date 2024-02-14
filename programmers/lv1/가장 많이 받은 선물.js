function solution(friends, gifts) {
    var answer = 0;
    let friend = Array(friends.length).fill(0);
    let arr = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    let vis = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    let obj = {};

    for (let i of friends) {
        obj[i] = 0;
    }

    for (let i of gifts) {
        let [a, b] = i.split(' ');
        let aIndex = friends.indexOf(a);
        let bIndex = friends.indexOf(b);

        obj[a] += 1;
        obj[b] -= 1;

        arr[aIndex][bIndex] += 1;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (i === j) continue;
            // if(arr[i][j] === 0) continue
            if (vis[i][j] === 1) continue;
            let a = arr[i][j];
            let b = arr[j][i];

            if (a > b) {
                friend[i] += 1;
            } else if (a < b) {
                friend[j] += 1;
            } else {
                if (obj[friends[i]] > obj[friends[j]]) {
                    friend[i] += 1;
                } else if (obj[friends[i]] < obj[friends[j]]) {
                    friend[j] += 1;
                } else if (obj[friends[i]] === obj[friends[j]]) {
                    continue;
                }
            }

            vis[i][j] = 1;
            vis[j][i] = 1;
        }
    }

    answer = Math.max(...friend);

    return answer;
}
