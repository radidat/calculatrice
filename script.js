
document.addEventListener('DOMContentLoaded', function () {
  let display = document.querySelector("#display-calc")
  let buttons= document.getElementsByTagName("button")



  for ( let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener("click", function () {
         let num =buttons[i].innerText;
        const actualNumber =display.innerText
         let buttonsNumber = buttons[i].getAttribute("data-number")

         /*lorsque je clqiue su un boutton, un nombre s'affiche*/
      if(buttonsNumber==="number"){
        if(actualNumber ==="0"){
          return display.innerText = num
        }else{
          return display.innerText = actualNumber + num
        }
      }

      let operator = buttons[i].getAttribute("data-operator")

/*lorsque je clique sur un boutton, un opérateur s'affiche */
      if(operator ==="add"){ 
        display.innerText =actualNumber +"+"
       if(actualNumber[actualNumber.length-1].includes("+")){
            disabled(actualNumber, display)
         }  
    }  
  
      if(operator === "substrat"){
      display.innerText =actualNumber +"-"
     if(actualNumber[actualNumber.length-1].includes("-")){
        disabled(actualNumber, display)
    }
       }

       if(operator ==="division"){
        display.innerText = actualNumber +"/"
       if(actualNumber[actualNumber.length-1].includes("/")){
          disabled(actualNumber, display)
      }
       }
       if(operator === "multi"){
       display.innerText = actualNumber+"*"
       if(actualNumber[actualNumber.length-1].includes("*")){
        disabled(actualNumber, display)
    }
       }
       if(buttons[i].matches("#remove")){
        let removeLastNum = actualNumber.substring(0, actualNumber.length - 1)
        if(display.innerText === actualNumber ){
          return display.innerText =removeLastNum
        }else if(actualNumber[actualNumber.length -1]!=="0"){
          return display.innerText="0"
        }
      }
/*lorsuqe je clique sur un opérateur, je ne veux pas que le boutton suivant soit un opérateur*/
      if(actualNumber[actualNumber.length -1]==="+"&& operator ==="substrat"){
       disabled(actualNumber, display)
      }else if(actualNumber[actualNumber.length -1]==="+"&&(operator ==="division" ||operator ==="multi") ){
        disabled(actualNumber, display)
      }

      if(actualNumber[actualNumber.length -1]==="-"&& operator ==="add"){
        disabled(actualNumber, display)
      }else if(actualNumber[actualNumber.length -1]==="-"&&(operator ==="division" ||operator ==="multi") ){
        disabled(actualNumber, display)
      }

      if(actualNumber[actualNumber.length -1]==="*"&& operator ==="substrat"){
        disabled(actualNumber, display)
      }else if(actualNumber[actualNumber.length -1]==="*"&&(operator ==="division" ||operator ==="add") ){
        disabled(actualNumber, display)
      }

      if(actualNumber[actualNumber.length -1]==="/"&& operator ==="substrat"){
        disabled(actualNumber, display)
       
      }else if(actualNumber[actualNumber.length -1]==="/"&&(operator ==="add" ||operator ==="multi") ){
        disabled(actualNumber, display)
      }
     /*lorque je clique sur reset je veux qu'on m'affiche 0*/
      if(buttons[i].matches("#reset")){
        if(actualNumber!=="0"|| display.innerText!=="0"){
          return display.innerText ="0"
        }
      }

/*lorsqu je clique sur le button égale, je veux afficher le résultat*/
       let resultat =  eval(actualNumber)
       if(buttons[i].matches("#equal")){
        return display.innerText = resultat.toString()
       }

       
    
    });
  
  }
  function disabled(disabled,display ){
    disabled.substring(0, disabled.length -1 )
    return display.innerText = disabled
  }

});

