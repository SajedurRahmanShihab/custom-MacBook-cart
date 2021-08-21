// Ram price
document.getElementById('eight-gb-ram').addEventListener('click', function() {
    const ramCost = document.getElementById('ram-cost');
    ramCost.innerHTML = '0';
});

document.getElementById('sixteen-gb-ram').addEventListener('click', function() {
    const ramCost = document.getElementById('ram-cost');
    ramCost.innerHTML = '180';
});


// ssd price
document.getElementById('ssd-256').addEventListener('click', function() {
    const ramCost = document.getElementById('ssd-cost');
    ramCost.innerHTML = '0';
});

document.getElementById('ssd-512').addEventListener('click', function() {
    const ramCost = document.getElementById('ssd-cost');
    ramCost.innerHTML = '100';
});

document.getElementById('ssd-1TB').addEventListener('click', function() {
    const ramCost = document.getElementById('ssd-cost');
    ramCost.innerHTML = '180';
});


// delivery method
document.getElementById('delivery-method-1').addEventListener('click', function() {
    const ramCost = document.getElementById('delivery-cost');
    ramCost.innerHTML = '0';
});

document.getElementById('delivery-method-2').addEventListener('click', function() {
    const ramCost = document.getElementById('delivery-cost');
    ramCost.innerHTML = '20';
});