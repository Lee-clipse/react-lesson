import React, { useState, useEffect } from "react";

function Index0902() {
  const [totalSize, setTotalSize] = useState(0);
  // 2
  const [imageDB, setImageDB] = useState([]);
  const [imageFrom, setImageForm] = useState({
    name: "",
    width: 0,
    length: 0,
    size: 0,
  });

  function handleInput(event) {
    const name = event.target.name;
    if (name === "name") {
      setImageForm({
        ...imageFrom,
        [name]: event.target.value,
      });
    } else {
      setImageForm({
        ...imageFrom,
        [name]: Number(event.target.value),
      });
    }
  }

  // 3
  function handleImageSave() {
    setImageDB([...imageDB, imageFrom]);
  }

  // 4
  function getTotalSize() {
    let sum = 0;
    imageDB.map((image) => {
      sum += image.size;
    });
    setTotalSize(sum);
  }

  useEffect(() => {
    getTotalSize();
  }, [imageDB]);

  return (
    <div>
      <div id="lesson-title">예제 1: 이미지 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. imageDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 image는 이름, 가로, 세로, 용량을 가진다.</div>
        <div>
          3. 이름, 가로, 세로, 용량을 입력 후 `저장` 버튼을 누르면 imageDB에
          저장된다.
        </div>
        <div>4. imageDB의 총 보관 용량을 조회할 수 있다.</div>
      </div>
      <hr></hr>
      {/* 시작 */}
      <div className="row">
        <div className="col-4">
          <div className="input-group">
            <span className="input-group-text">이름</span>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
          <div className="input-group">
            <span className="input-group-text">가로</span>
            <input
              type="number"
              className="form-control"
              name="width"
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
          <div className="input-group">
            <span className="input-group-text">세로</span>
            <input
              type="number"
              className="form-control"
              name="length"
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
          <div className="input-group">
            <span className="input-group-text">용량</span>
            <input
              type="number"
              className="form-control"
              name="size"
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
          <button className="btn btn-primary" onClick={() => handleImageSave()}>
            저장
          </button>
        </div>
        <div className="col-8">
          <div>총 보관용량 {totalSize}</div>
          {imageDB.map((image) => {
            return (
              <div>
                <div>{image.name}</div>
                <div>{image.width}</div>
                <div>{image.length}</div>
                <div>{image.size}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index0902;
