var expression = '';

function addToScreen(){
    document.getElementById('screen').textContent = expression || '0';

}

function addNumber(number){
    expression += number;
    addToScreen();
}

function addOperator(oper){
    if (expression==='')return;
    expression += oper;
    addToScreen();
}

function clearScreen(){
    expression = '';
    addToScreen();
}

function del(){
    expression = expression.slice(0, -1);
    addToScreen();
}

function exprr(){
    expression = document.getElementById('screen').textContent;
}

function calculate(){
    try{
        const result = eval(expression);
        expression = String(result);
        addToScreen();
    }
    catch (error){
        expression = 'Syntax Error';
        addToScreen();
        
        
    }
    
}

