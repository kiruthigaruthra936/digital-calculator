function calculate(op)
{
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if(isNaN(a) || isNaN(b))
    {
        document.getElementById("result").innerHTML =
        "⚠️ Enter both numbers";
        return;
    }

    let ans;

    switch(op)
    {
        case '+':
            ans = (a + b).toFixed(2);
            break;

        case '-':
            ans = (a - b).toFixed(2);
            break;

        case '*':
            ans = (a * b).toFixed(2);
            break;

        case '/':
            ans = (b==0) ? "Cannot Divide by 0" : (a / b).toFixed(2);
            break;
    }

    document.getElementById("result").innerHTML =
    "✅ Result : " + ans;
}