import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";

function ShoppingCart({ productData }) {
  const [shoppingCart, setShoppingCart] = useState(productData);
  const [purchaseSum, setPurchaseSum] = useState(0);

  useEffect(() => {
    setShoppingCart(productData);
    calcProductSum(productData);
  }, [productData]);

  function calcProductSum(productData) {
    let sum = 0;
    productData.map((product) => {
      sum += product.price * product.quantity;
    });
    setPurchaseSum(sum);
  }

  function handlePurchase() {
    alert(`$${purchaseSum.toFixed(2)} 결제가 완료되었습니다!`);
    window.location.reload();
  }

  return (
    <Wrapper>
      <div id="list">
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
                  <div>합계: ${(product.price * product.quantity).toFixed(2)}</div>
                </div>
              </div>
            );
          })}
      </div>

      <div id="purchase-box">
        <div id="p-title">합계: ${purchaseSum.toFixed(2)}</div>
        {purchaseSum && (
          <div id="p-btn" onClick={() => handlePurchase()}>
            결제하기
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default ShoppingCart;
