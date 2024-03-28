function solution(command) {
    var answer = [];
    let x = 0
    let y = 0
    let d = 0
    const dxy = [[0,1],[1,0],[0,-1],[-1,0]]
    
    for(let i = 0; i < command.length; i++) {
        if(command[i] == "G") {
            x += dxy[d][0]
            y += dxy[d][1]
        }else if(command[i] == "B") {
            x -= dxy[d][0]
            y -= dxy[d][1]
        }else if(command[i] == "R") {
            d+=1;
            if(d === 4) {
                d = 0
            }
        }else if(command[i] == "L") {
            d -= 1;
            if(d === -1) {
                d = 3
            }
        }
    }
    
    answer = [x,y]
    
    return answer;
}