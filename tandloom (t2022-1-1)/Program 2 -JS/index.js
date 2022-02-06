function patternOdd() {
    let a;
    a = document.getElementById("number").value;
    for (let i = 1; i <= a * 2; i++) {
        if (i % 2 != 0) {
      
       res = i.toString().concat(', ');
        document.write(res);
        
        }
    }
    
}


