const calculateBtn = document.querySelector(".calculateBtn");

function calculateTip() {

    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

    if (isNaN(billAmount))  {
        alert("Por gentileza, preencha o valor da conta");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;

    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount");

    tipAmountInput.value = tipAmount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    totalAmountInput.value = totalAmount.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

    
}

calculateBtn.addEventListener("click", calculateTip);
