import React, { useState, useEffect } from "react";
import { ProductList } from "../assets/img/const.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";

const Customer = () => {
  /* 로그인 정보 불러오기*/
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  /* 로그인*/
  const [loggedInUser, setLoggedInUser] = useState(null);

  /* 상품정보 선택 */
  const [selectProduct, setSelectProduct] = useState({});

  /* 상품수량 선택 */
  const [productEa, setProdctEa] = useState(0);
  function handleProdctEa(value) {
    setProdctEa(value);
  }

  /* 모달 스위치 */
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (product) => {
    setSelectProduct(product);
    setShowModal(true);
  };

  /* 장바구니 스위치 */
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <div>
      {/* Navbar */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">K_ollabo</span>
          </a>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            ></input>
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item pe-3">
              <button
                className="btn btn-outline-warning"
                onClick={handleShowCart}
              >
                <i className="bi  bi-cart"></i>
              </button>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {loggedInUser ? loggedInUser.name : "Guest"}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{loggedInUser ? loggedInUser.name : "Guest"}</h6>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* 사이드바 */}
      <div id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="#">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span>Alerts</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </div>

      {/*MainContent*/}
      <main id="main" className="main">
        <div variant="primary">
          {ProductList.map((product) => {
            return (
              <div
                className="card-body"
                key={product.index}
                onClick={() => handleShowModal(product)}
              >
                <div className="p-title">{product.title}</div>
                <div className="p-price">${product.price}</div>
              </div>
            );
          })}
        </div>
      </main>

      {/* 상품상세정보 모달 */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>상품상세정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img src={selectProduct.image} alt="" />
            </div>
            <div className="col-7">
              <div>
                <h3> {selectProduct.title}</h3>
              </div>
              <div>
                <h3> ${selectProduct.price}</h3>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(event) => handleProdctEa(event.target.value)}
                  ></input>
                  <span className="input-group-text">수량</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
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
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Customer;
