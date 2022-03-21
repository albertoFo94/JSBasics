// const originalPrice = 120;
// const discount = 18;

function priceWithDiscountCalculate(price, discount) {
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
  
  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const priceInput = document.getElementById("PriceInput");
  const priceValue = priceInput.value;

  const discountInput = document.getElementById("DiscountInput");
  const discountValue = discountInput.value;

  const priceWithDiscount = priceWithDiscountCalculate(priceValue, discountValue);

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerText = `The price with discount is: $ ${priceWithDiscount}`;
}

console.log({
  originalPrice,
  discount,
  percentagePriceWithDiscount,
  priceWithDiscount
});