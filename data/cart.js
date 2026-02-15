export const cart = [];

export function addtoCart(productId) {
  let MatchingItem;

  cart.forEach((cartitem) => {

    if(productId === cartitem.productId){
      MatchingItem = cartitem;
      }
    })

    if(MatchingItem){
      MatchingItem.quantity += 1;
    } else{
      cart.push({
        productId: productId,
        quantity: 1
      });
    };
}