export function requestNowTime() {
  const result = {
    code: 200,
    data: {
      time: new Date().toLocaleString("ko-KR"),
    },
  };
  return result;
}

// GET 요청
// 예제 01번
export function requestUserLogin(id, pwd) {
  if (id === "okok" && pwd === "okok") {
    return {
      code: 200,
      data: {
        sign: true,
      },
    };
  }
  return {
    code: 404,
    data: {
      sign: false,
    },
  };
}

// POST 요청
// 예제 02번
export function requestProductEnter(rpNumber, zone) {
  return {
    code: 200,
    data: {
      rpNumber,
      createdAt: new Date().toLocaleString("ko-KR"),
      zone,
    },
  };
}

// GET 요청
// 예제 03번
export function requestEveryUser() {
  return {
    code: 200,
    data: [
      { name: "Lee", point: 0, amount: 100 },
      { name: "Kim", point: 50, amount: 600 },
      { name: "Han", point: 10, amount: 200 },
      { name: "Han", point: 100, amount: 1200 },
      { name: "Woo", point: 0, amount: 150 },
    ],
  };
}

// POST 요청
// 예제 03번
export function requestAddPoint(name, point) {
  return {
    code: 200,
    data: {
      name,
      point,
    },
  };
}
