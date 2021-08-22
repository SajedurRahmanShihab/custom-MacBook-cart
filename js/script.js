function calculateTotal() {
    const totalPrice = document.getElementById('total-price');
    const ramCost = document.getElementById('ram-cost');
    const ssdCost = document.getElementById('ssd-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const ramCostNum = parseFloat(ramCost.innerText);
    const ssdCostNum = parseFloat(ssdCost.innerText);
    const deliveryCostNum = parseFloat(deliveryCost.innerText);
    totalPrice.innerText = ramCostNum + ssdCostNum + deliveryCostNum + 1299;
}

document.getElementById('eight-gb-ram').addEventListener('click', function() {
    const ramCost = document.getElementById('ram-cost');
    ramCost.innerText = 0;
    calculateTotal();
});

document.getElementById('sixteen-gb-ram').addEventListener('click', function() {
    const ramCost = document.getElementById('ram-cost');
    ramCost.innerText = 180;
    calculateTotal();
});


document.getElementById('ssd-256').addEventListener('click', function() {
    const ssdCost = document.getElementById('ssd-cost');
    ssdCost.innerText = 0;
    calculateTotal();
});

document.getElementById('ssd-512').addEventListener('click', function() {
    const ssdCost = document.getElementById('ssd-cost');
    ssdCost.innerText = 100;
    calculateTotal();
});

document.getElementById('ssd-1TB').addEventListener('click', function() {
    const ssdCost = document.getElementById('ssd-cost');
    ssdCost.innerText = 180;
    calculateTotal();
});


document.getElementById('delivery-method-1').addEventListener('click', function() {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    calculateTotal();
});

document.getElementById('delivery-method-2').addEventListener('click', function() {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    calculateTotal();
});