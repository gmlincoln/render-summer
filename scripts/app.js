let itemsTotalPrice = 0;
let discountPrice = 0;
let totalPrice = 0;
let totalPrices = document.getElementById('total-price');

//Cart Calculation
function itemCalculation(data) {
    const productList = document.getElementById('products-list');
    const itemName = data.childNodes[3].childNodes[3].innerText;
    const productName = document.createElement('p');
    const itemPrice = data.childNodes[3].childNodes[5].innerText.split(" ")[0];

    // Adding Class to display product name in a good way
    productName.classList.add('my-3', 'text-lg', 'text-secondary-color', 'font-medium');
    const itemNumber = productList.childElementCount;
    productName.innerHTML = `${itemNumber + 1}. ${itemName}---${itemPrice} TK`;

    // Add Product Name in list
    productList.appendChild(productName);

    // Items Total Price
    itemsTotalPrice = parseFloat(itemsTotalPrice) + parseFloat(itemPrice);

    // Coupon Code Button Activation 
    const couponBtn = document.getElementById('coupon-btn');
    if (itemsTotalPrice >= 200) {
        couponBtn.removeAttribute('disabled');
    } else {
        couponBtn.setAttribute('disabled', true);
    }

    // Make Purchase Button Activation
    const makePurchaseBtn = document.getElementById('purchase-btn');
    if (itemsTotalPrice > 0) {
        makePurchaseBtn.removeAttribute('disabled');
    } else {
        makePurchaseBtn.setAttribute('disabled', true);

    }
    totalPrice = itemsTotalPrice;
    totalPrices.innerText = totalPrice;
    const productPrice = document.getElementById('products-price');
    productPrice.innerText = parseFloat(itemsTotalPrice);
}

// Coupon Code Button Given Message
document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const couponFieldValue = event.target.value;
    const inValidMessage = document.getElementById('invalid-message');
    if (couponFieldValue === 'SELL200') {
        inValidMessage.style.display = 'none';
    } else {
        inValidMessage.style.display = 'block';
    }
});

// Coupon Apply
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-field');
    const couponFieldValue = couponField.value;

    if (couponFieldValue === 'SELL200') {
        discountPrice = parseFloat((itemsTotalPrice * 20) / 100);
        const discount = document.getElementById('discount-price');
        discount.innerText = discountPrice;
        totalPrice = parseFloat(itemsTotalPrice - discountPrice);
        totalPrices.innerText = totalPrice;
        couponField.value = '';
    }
    else {
        alert('Invalid Coupon Code');
        couponField.value = '';
    }
});

// Go Home 
function goHome() {
    window.location.href = 'index.html';
}

