document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    const display = document.getElementById("cal-display");
    const btnElements = document.getElementsByClassName("btn");
    
    let currentValue="";

    function  evaluateResult(){
      const convertedValue=currentValue.replace("×", "*").replace("%", "*0.01").replace("÷", "/");
       const result=eval(convertedValue);
       currentValue=result.toString();
       display.value=currentValue;    
    }

    

    //for loop to add event handler on button elements
    for (i = 0; i < btnElements.length; i++) {
      const btn = btnElements[i];

      btn.addEventListener("click", function () {
        const value=btn.innerText;

        if(value==="AC"){
           currentValue="";
           display.value=currentValue;
        } else if (value=="=") {
          evaluateResult();
        } else{
          currentValue+=value;
          display.value=currentValue;
        }
        

      });
    }
  });