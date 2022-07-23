// https://calculator.swiftutors.com/cost-of-goods-sold-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 =  document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costOfGoodsSoldRadio = document.getElementById('costOfGoodsSoldRadio');
const beginningInventoryRadio = document.getElementById('beginningInventoryRadio');
const inventoryPurchasesRadio = document.getElementById('inventoryPurchasesRadio');
const endInventoryRadio = document.getElementById('endInventoryRadio');

let costOfGoodsSold;
let beginningInventory = v1;
let inventoryPurchases = v2;
let endInventory = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

costOfGoodsSoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning Inventory';
  variable2.textContent = 'Inventory Purchases';
  variable3.textContent = 'End Inventory';
  beginningInventory = v1;
  inventoryPurchases = v2;
  endInventory = v3;
});

beginningInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Sold (CoGS)';
  variable2.textContent = 'Inventory Purchases';
  variable3.textContent = 'End Inventory';
  costOfGoodsSold = v1;
  inventoryPurchases = v2;
  endInventory = v3;
});

inventoryPurchasesRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Sold (CoGS)';
  variable2.textContent = 'Beginning Inventory';
  variable3.textContent = 'End Inventory';
  costOfGoodsSold = v1;
  beginningInventory = v2;
  endInventory = v3;
});

endInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Sold (CoGS)';
  variable2.textContent = 'Beginning Inventory';
  variable3.textContent = 'Inventory Purchases';
  costOfGoodsSold = v1;
  beginningInventory = v2;
  inventoryPurchases = v3;
});

btn.addEventListener('click', function() {
  
  if(costOfGoodsSoldRadio.checked)
    result.textContent = `Cost of Goods Sold = ${computeCostOfGoodsSold().toFixed(2)} CoGS`;

  else if(beginningInventoryRadio.checked)
    result.textContent = `Beginning Inventory = ${computeBeginningInventory().toFixed(2)}`;

  else if(inventoryPurchasesRadio.checked)
    result.textContent = `Inventory Purchases = ${computeInventoryPurchases().toFixed(2)}`;

  else if(endInventoryRadio.checked)
    result.textContent = `End Inventory = ${computeEndInventory().toFixed(2)}`;
})

// calculation

function computeCostOfGoodsSold() {
  return Number(beginningInventory.value) + Number(inventoryPurchases.value) - Number(endInventory.value);
}

function computeBeginningInventory() {
  return Number(costOfGoodsSold.value) - Number(inventoryPurchases.value) + Number(endInventory.value);
}

function computeInventoryPurchases() {
  return Number(costOfGoodsSold.value) - Number(beginningInventory.value) + Number(endInventory.value);
}

function computeEndInventory() {
  return Number(beginningInventory.value) + Number(inventoryPurchases.value) - Number(costOfGoodsSold.value);
}