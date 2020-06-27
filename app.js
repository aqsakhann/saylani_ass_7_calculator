function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
}
function clearBtn(){
    form.displayResult.value=" ";
}
function squBtn(){
    
    var sq=form.displayResult.value*form.displayResult.value;
    form.displayResult.value=sq;
}

function rootBtn(){
    
    var rt=form.displayResult.value;
    var re=Math.sqrt(rt);
    form.displayResult.value=re;
}