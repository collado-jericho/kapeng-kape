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