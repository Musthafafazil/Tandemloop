function patternOddfn() {
    let a;
    a = document.getElementById("number").value;
    if (a % 2 == 0) {
        a = a - 1;
        for (let i = 1; i <= a * 2; i++) {
            if (i % 2 != 0) {
                res = i.toString().concat(' ');
                document.write(res);
            }
        }
       
    }
    else{
        for (let i = 1; i <= a * 2; i++) {
            if (i % 2 != 0) {
                res = i.toString().concat(' ')
                document.write(res);
            }
    }
}
}
