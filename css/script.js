var total = document.getElementById("total");
    var num1 = document.getElementById("txt-num1");
    var num2 = document.getElementById("txt-num2");
    const Sum =()=>{
        total.value = parseFloat(num1.value) + parseFloat(num2.value);
    }
    const Sub =()=>{
        total.value = parseFloat(num1.value) - parseFloat(num2.value);
    }
    const Multiple=()=>{
        total.value = parseFloat(num1.value) * parseFloat(num2.value);
    }
    const Devit =()=>{
        total.value = parseFloat(num1.value) / parseFloat(num2.value);
    }
    const Modulus=()=>{
        total.value = parseFloat(num1.value) % parseFloat(num2.value);
    }
    const ResetSum = () =>{
        total.value = null;
        num1.value = null;
        num2.value = null;
    }