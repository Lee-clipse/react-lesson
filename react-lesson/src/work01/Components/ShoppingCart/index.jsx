import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";

function ShoppingCart({ productData }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    setShoppingCart(productData);
    productPrice();
  }, [productData]);

  function handlePurchase() {
    alert(`$ 결제가 완료되었습니다!`);
    window.location.reload();
  }

  function productPrice() {
    let sum = 0;
    productData.map((product) => {
      sum += product.price * product.quantity;
    });
    setPriceSum(sum);
  }

  return (
    <Wrapper>
      <div id="list">```
        {shoppingCart &&
          shoppingCart.map((product) => {
            return (
              <div className="p-box" key={product.index}>
                <img src={product.image} alt="" />
                <div>
                  <div>{product.title}</div>
                  <div>
                    {product.quantity}개 / 개당 ${product.price}
                  </div>
                  <div>
                    합계: ${(product.price * product.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div id="purchase-box">
        <div id="p-title">합계: ${priceSum.toFixed(2)}</div>
        {
          <div id="p-btn" onClick={() => handlePurchase()}>
            결제하기
          </div>
        }
      </div>
    </Wrapper>
  );
}

export default ShoppingCart;
