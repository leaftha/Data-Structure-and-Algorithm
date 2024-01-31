function solution(queue1, queue2) {
    var answer = -2;
    let q1 = 0;
    let q2 = 0;

    queue1.map((item) => (q1 += item));
    queue2.map((item) => (q2 += item));
    let count = 0;

    if (q1 === q2) {
        return 0;
    }

    let p1 = 0;
    let p2 = 0;
    let q1True = true;
    let q2True = true;
    while (q1 != q2) {
        count++;
        if (q1 < q2) {
            let val;
            if (q2True) {
                val = queue2[p2];
            } else {
                val = queue1[p2];
            }
            q2 -= val;
            q1 += val;
            p2++;
            if (p2 === queue1.length) {
                p2 = 0;
                q2True = !q2True;
            }
        } else {
            let val;
            if (q1True) {
                val = queue1[p1];
            } else {
                val = queue2[p1];
            }
            q1 -= val;
            q2 += val;
            p1++;
            if (p1 === queue1.length) {
                p1 = 0;
                q1True = !q1True;
            }
        }
        if (count === queue1.length * 6) {
            return (answer = -1);
        }
    }

    answer = count;
    return answer;
}
