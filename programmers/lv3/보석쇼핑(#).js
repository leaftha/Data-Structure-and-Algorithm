function solution(gems) {
    const answer = [];
    const map = new Map();
    const size = [...new Set(gems)].length;

    gems.forEach((gem, index) => {
        map.delete(gem);
        map.set(gem, index);
        if (map.size === size) answer.push([map.values().next().value + 1, index + 1]);
    });
    answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
    return answer[0];
}
