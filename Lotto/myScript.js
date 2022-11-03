// document.write(num);
var lotto = [];
while (lotto.length < 6) {
    var a =parseInt(Math.random() * 45 + 1);

    if  (lotto.indexOf(a) == -1)
    {
        lotto.push(a);
    }
        
}

lotto.sort((a,b)=>a-b); //Ascending order
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
