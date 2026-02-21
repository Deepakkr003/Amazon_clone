import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './Checkout/OrderSummary.js';
import {renderPaymentSummary} from './Checkout/PaymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage() {
  try {

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        
        resolve('value3');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

