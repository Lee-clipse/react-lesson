import React, { useState, useEffect } from "react";
import OrderModal from "./Components/OrderModal";

function Index1008() {
  const [selectedOrder, setSelectedOrder] = useState({});
  const [showModal, setShowModal] = useState(false);

  const orderList = [
    { id: 1, list: [{ title: "밀면", qty: 1 }] },
    {
      id: 2,
      list: [
        { title: "밀면", qty: 2 },
        { title: "만두", qty: 1 },
      ],
    },
    {
      id: 3,
      list: [
        { title: "밀면", qty: 2 },
        { title: "비빔 밀면", qty: 1 },
        { title: "갈비", qty: 2 },
      ],
    },
  ];

  function checkOrder(order) {
    setSelectedOrder(order);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <OrderModal
          order={selectedOrder}
          closebtn={() => setShowModal(false)}
        />
      )}

      <div>
        <div id="lesson-title">예제 7: 주문 모달</div>

        <div id="lesson-content">
          <div className="title">예제</div>
          <div>
            1. 주문 내역을 클릭하면 해당 주문의 정보를 조회하는 모달이 등장한다.
          </div>
        </div>

        <div id="lesson-content">
          {orderList.map((order) => {
            return (
              <div
                className="link-button"
                onClick={() => {
                  checkOrder(order);
                }}
              >
                {order.id}번 주문 내역 보기
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Index1008;
