import React, { useEffect, useState } from "react";
import { Wrapper } from "./style.js";
import { reqProductList } from "./api.js";

function Work0002() {
  const [productList, setProductList] = useState([]);
  const [formData, setFormData] = useState({
    rpNumber: "",
    weight: "",
    width: "",
    length: "",
    height: "",
    createdAt: "",
  });

  // 4. 입고된 상품의 리스트를 조회할 수 있다.
  useEffect(() => {
    fetchProductList();
  }, []);

  function fetchProductList() {
    const result = reqProductList();
    setProductList(result.data);
  }

  // 1. 상품의 고유 번호, 무게, 가로, 세로, 높이를 입력 받을 수 있다.
  function handleFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // 2. 입고 등록 버튼을 누르면 해당 상품이 입고된다.
  function handleProductEnter() {
    // 3. 단, 상품의 고유 번호가 중복되면 입고가 되지 않는다.
    const isDuplicate = checkDuplicateRPNumber(formData.rpNumber);
    if (isDuplicate) {
      alert("중복되는 송장 번호입니다!");
      return;
    }

    const newProduct = {
      ...formData,
      createdAt: new Date().toLocaleString("ko-KR"),
    };
    setProductList([...productList, newProduct]);
  }

  function checkDuplicateRPNumber(rpNumber) {
    let result = false;
    productList.map((product) => {
      if (product.rpNumber === rpNumber) {
        result = true;
      }
    });
    return result;
  }

  // 5. 각 상품의 출고 처리 버튼을 눌러 리스트에서 제외할 수 있다.
  function handleProductExport(rpNumber) {
    const newProductList = productList.filter((product) => {
      if (product.rpNumber !== rpNumber) {
        return true;
      }
      return false;
    });
    setProductList(newProductList);
  }

  return (
    <Wrapper>
      <div id="title">내 창고</div>

      <div id="input-box">
        <div className="input-row">
          <label>고유 번호</label>
          <input type="text" name="rpNumber" onChange={(event) => handleFormData(event)} />
        </div>

        <div className="input-row">
          <label>무게</label>
          <input type="text" name="weight" onChange={(event) => handleFormData(event)} />
        </div>

        <div className="input-row">
          <label>가로</label>
          <input type="text" name="width" onChange={(event) => handleFormData(event)} />
        </div>

        <div className="input-row">
          <label>세로</label>
          <input type="text" name="length" onChange={(event) => handleFormData(event)} />
        </div>

        <div className="input-row">
          <label>높이</label>
          <input type="text" name="height" onChange={(event) => handleFormData(event)} />
        </div>

        <div className="input-row">
          <div id="enter-btn" onClick={() => handleProductEnter()}>
            입고등록
          </div>
        </div>
      </div>

      <div id="product-list" className="f-col">
        {/* 4. 입고된 상품의 리스트를 조회할 수 있다. */}
        {productList.map((product) => {
          return (
            <div className="product">
              <div className="f-row">
                <b>{product.rpNumber}</b>
                <div>입고: {product.createdAt}</div>
              </div>

              <div className="f-row">
                <div>무게: {product.weight}kg</div>
                <div>가로: {product.width}cm</div>
                <div>세로: {product.length}cm</div>
                <div>높이: {product.height}cm</div>
              </div>

              <div id="calc-btn" onClick={() => handleProductExport(product.rpNumber)}>
                출고 처리
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Work0002;
