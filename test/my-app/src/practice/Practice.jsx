import React, { useState, useEffect } from "react";
import { ProductList } from "../assets/img/const.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";

const Practice = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});
  const [qty, setQty] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  function handleProduct(product) {
    setShowModal(true);
    setSelectProduct(product);
  }

  function handleCloseCart() {
    setShowCart(false);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  function addProduct() {
    // 인풋에 입력된 수량과 셀렉트 프로덕트의 프라이스를 곱해서 합계금액 전송
    const priceSum = Number(selectProduct.price) * Number(qty);
    selectProduct.priceSum = priceSum;
    selectProduct.qty = qty;
    selectProduct.index = shoppingCart.length() + 1;

    // 셀렉트 프로덕트 정보를 장바구니로 전송
    setShoppingCart([...shoppingCart, selectProduct]);

    // 인풋 초기화
    setQty(1);

    // 모달닫기
    setShowModal(false);

    // 장바구니 열기
    setShowCart(true);
  }

  function handleDelete(selectedProduct) {
    const newShoppingCart = shoppingCart.filter((product) => {
      if (product.title === selectProduct.title) {
        return false;
      }
      return true;
    });
    setShoppingCart(newShoppingCart);
  }

  return (
    <div>
      <div className="container-fluid bg-secondary text-white p-3 d-flex justify-content-between">
        <h1>상품목록</h1>
        <button
          className="btn btn-outline-warning"
          onClick={() => setShowCart(true)}
        >
          <i className="bi bi-cart">장바구니</i>
        </button>
      </div>
      <div className="row">
        {ProductList.map((product) => {
          return (
            <div
              className="card col-lg-3 m-1 text-center rounded-4 btn"
              onClick={() => handleProduct(product)}
            >
              <div className="card-header">
                <img src={product.image}></img>
              </div>
              <div className="card-body">
                <div className="fw-bold fs-5">$ {product.price}</div>
                <div>{product.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 상품상세정보 모달 */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>상품상세정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={selectProduct.image}></img>
            <div>{selectProduct.title}</div>
            <div>{selectProduct.price}</div>
          </div>

          <input
            type="number"
            onChange={(event) => setQty(event.target.value)}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => addProduct()}>
            장바구니 담기 <i className=" bi bi-cart"></i>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 장바구니 */}
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            장바구니 <i className="bi bi-cart"></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row">
            {shoppingCart.map((product) => {
              return (
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    상품명 : {product.title}{" "}
                    <button
                      className="btn-close"
                      onClick={() => handleDelete(product)}
                    ></button>
                  </div>
                  <img src={product.image}></img>
                  <div></div>
                  <div>단가 : ${product.price}</div>
                  <div>수량 : {product.qty}</div>
                  <div>합계 : ${product.priceSum.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
          <button className="btn col-12 btn-outline-success">결제하기</button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Practice;
