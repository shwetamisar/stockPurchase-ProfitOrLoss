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
    let price = currentP-initialP;
       if (price === 0){
        //neither profit nor loss 
        document.getElementById('output').style.color="#e2e8f0";
        displayMessage("If you can't see something moving, doesn't mean its not going somewhere!");
       }
       else if(price>0)
        {
            //profit
            profitLoss=(price)*quantity;
            PercentageProfitLoss=((price)/initialP)*100;;
            document.getElementById('output').style.color="#e2e8f0";
            displayMessage(`Hey! you just earned a profit of ${profitLoss} with ${PercentageProfitLoss}%`);
          

        }
        else 
        {
            //loss
            price = price*(-1)
            profitLoss=(price)*quantity;
           PercentageProfitLoss=((price)/initialP)*100;
            document.getElementById('output').style.color="#e2e8f0";
            displayMessage(`Hey! you have to bear loss of ${profitLoss} with ${PercentageProfitLoss}%`);
        }
        

}

function displayMessage(message)
{
    output.innerHTML=message;
}