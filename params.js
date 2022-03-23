const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = {discountPercentage: 0.1, salesTax: 0.0825 };
  
  function calculateTotal(products=[], {discountPercentage=.25,salesTax=0 }={}){
    let total = 0;
    for(let product of products){
        let {priceInCents,quantity} = product;
        total += priceInCents * quantity
    }
    console.log(total)

    if(discountPercentage) total *= 1-discountPercentage;
    return total * (1+salesTax);
  }
   // Function call
  console.log(calculateTotal(products,options)); //> 8768.25*/