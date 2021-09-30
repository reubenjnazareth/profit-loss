const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn")
const output = document.querySelector("#output");

// processing
function calProfitAndLoss(iP, qty, cP) {
    if(iP > cP) {
        var loss = (iP - cP) * qty;
        var percentageLoss = (loss/iP);
        var pL = percentageLoss.toFixed(2)
        // output
        output.innerText = "Loss:" + loss +  "   Percentage Loss: " + pL + "%"

        container.style.backgroundColor = "#EF4444";
        header.style.backgroundColor= "#991B1B"

    } else if(iP < cP){
        var profit = (cP - iP) * qty;
        var percentageProfit = (profit/iP);
        var pP = percentageProfit.toFixed(2)
        // output
        output.innerText = "Profit:" + profit +  "    Percentage Profit: " + pP + "%"

        container.style.backgroundColor = "#10B981";
        header.style.backgroundColor= "#047857"

    } else if(cP = iP) {
        // output
        output.innerText = "No Profit or Loss"
        container.style.backgroundColor = "#f3eed9";
        header.style.backgroundColor= "#FEF3C7"
    } else {
        output.innerText = "PLEASE FILL OUT ALL FIELDS"
        container.style.backgroundColor = "#f3eed9";
        header.style.backgroundColor= "#FEF3C7"
    }
}

function profitOrLoss() {
    var iP = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var cP = Number(currentPrice.value);
    calProfitAndLoss(iP, qty, cP)
}

tellMeBtn.addEventListener("click", profitOrLoss);