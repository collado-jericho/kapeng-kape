// ===== Constants and variables =====
const shopName = 'Kapeng Kape';
const currentYear = new Date().getFullYear();
let runningTotal = 0;

// ===== Add up the product prices (only exist on the home page) =====
const priceEls = document.querySelectorAll('.price');
priceEls.forEach(function (el) {
  const amount = parseFloat(el.textContent.replace('₱', ''));
  runningTotal += amount;
});

const productCount = priceEls.length;
const averagePrice = productCount > 0 ? runningTotal / productCount : 0;

// ===== Write the shop name into the header =====
const nameEl = document.getElementById('shop-name');
if (nameEl) {
  nameEl.textContent = shopName;
}

// ===== Dynamic copyright line in the footer =====
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
  copyrightEl.textContent = '© ' + currentYear + ' ' + shopName + '. All rights reserved.';
}

// ===== Computed value: product count + average price =====
const summaryEl = document.getElementById('product-summary');
if (summaryEl) {
  summaryEl.textContent = productCount + ' products · Average price: ₱' + averagePrice.toFixed(2);
}

// ===== Console logs =====
console.log('Shop name:', shopName);
console.log('Running total:', runningTotal);
console.log('Average price:', averagePrice);

// ===== Product status (only runs on pages that have a status box) =====
const statusEl = document.getElementById('product-status');

if (statusEl) {
  // Values come from data- attributes, so they arrive as strings
  const stock = Number(statusEl.dataset.stock);
  const orderTotal = Number(statusEl.dataset.orderTotal);
  const isMember = statusEl.dataset.member === 'true';
  const isShopOpen = true;

  // Decision 1: stock status (if / else if / else)
  let stockMessage;
  if (stock > 10) {
    stockMessage = 'In stock';
  } else if (stock >= 1) {
    stockMessage = 'Only a few left';
  } else {
    stockMessage = 'Sold out';
  }

  // Decision 2: free delivery check (&& plus ternary)
  const qualifiesForFree = orderTotal >= 500 && isMember === true;
  const deliveryFee = qualifiesForFree ? 0 : 150;
  const finalTotal = orderTotal + deliveryFee;

  // Decision 3: shop open or closed (boolean plus ternary)
  const shopMessage = isShopOpen === true ? 'Open today' : 'Closed today';

  document.getElementById('stock-status').textContent = stockMessage;
  document.getElementById('delivery-fee').textContent = '₱' + deliveryFee;
  document.getElementById('final-total').textContent = '₱' + finalTotal;
  document.getElementById('shop-status').textContent = shopMessage;

  console.log('Stock message:', stockMessage);
  console.log('Delivery fee:', deliveryFee);
  console.log('Final total:', finalTotal);
}