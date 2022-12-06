let initialPrice=document.querySelector('#initial-price');
let quantityStocks=document.querySelector("#stock-quantity");
let currentPrice=document.querySelector("#current-price");

let submitButton=document.querySelector("#submit-btn");
let output=document.querySelector("#output");
submitButton.addEventListener("click",onClickHandler);

function onClickHandler()
{
    let initialP=parseInt(initialPrice.value);
    let quantity=parseInt(quantityStocks.value);
    let currentP=parseInt(currentPrice.value);
    calculateProfitOrLoss(initialP,quantity,currentP);
}
function calculateProfitOrLoss(initialP,quantity,currentP)
{
    let profitLoss=0,PercentageProfitLoss=0;
    
        if(currentP >initialP)
        {
            //profit
            profitLoss=(currentP-initialP)*quantity;
            PercentageProfitLoss=((currentP-initialP)/initialP)*100;;
            document.getElementById('output').style.color="#f8fafc";
            displayMessage(`Hey! you just earned a profit of ${profitLoss} with ${PercentageProfitLoss}%`);
          

        }
        else if(initialP >currentP)
        {
            //loss
            profitLoss=(currentP-initialP)*quantity;
           PercentageProfitLoss=((currentP-initialP)/initialP)*100;
            document.getElementById('output').style.color="#f8fafc";
            displayMessage(`Hey! you have to bear loss of ${profitLoss} with ${PercentageProfitLoss}%`);
            

        }
        else{
            //neither profit nor loss 
            document.getElementById('output').style.color="#f8fafc";
            displayMessage("If you can't see something moving, doesn't mean its not going somewhere!");
        }

}

function displayMessage(message)
{
    output.innerHTML=message;
}