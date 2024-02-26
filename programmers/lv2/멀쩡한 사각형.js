function solution(w, h) {
    if (w === h) return w * h - w;

    if (w === 1 || h === 1) return 0;

    let notSquare = 0;

    for (let x = 1; x <= w; x++) notSquare += Math.ceil((x * h) / w) - Math.floor(((x - 1) * h) / w);
    return w * h - notSquare;
}
