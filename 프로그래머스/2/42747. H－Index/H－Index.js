function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let h = 0;
    let h_max = 0;
    
    while(h < citations[0]) {
        h++;
        citations.shift();
    }
    
    return h;
}