import React, { useState, useEffect } from "react";

function Index0908() {
  const bookCategory = ["문학", "자기계발", "공부", "소설"];
  const [libraryDB, setLibraryDB] = useState([]);

  const [bookList, setBookList] = useState([]);

  // 2
  // API를 요청하듯, 새로고침시 `requestLibraryData()` 함수 호출 후 데이터 저장
  useEffect(() => {
    const result = requestLibraryData();
    setLibraryDB(result);
  }, []);

  // 컴포넌트 분리
  function getBookList(bookList) {
    return bookList.map((book) => {
      return (
        <div>
          {book.category} / {book.qty}권
        </div>
      );
    });
  }

  function totalBook(bookList) {
    let sum = 0;
    bookList.map((book) => {
      sum += book.qty;
    });
    return sum;
  }

  function handelCategory(value) {
    // 라이브러리를 돌면서 벨류값과 같은 책을 찾고
    const list = [];
    libraryDB.map((library) => {

      library.book.map((item) => {
        if (item.category === value) {
          const object = {
            name: library.name,
            qty: item.qty,
          };
          list.push(object);
        }
      });
      
    });
    
    setBookList(list);
    // 그 책의 수량을 합한다.
  }

  return (
    <div>
      <div id="lesson-title">예제 7: 도서관 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. libraryDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 도서관은 이름, 보유 책 종류, 책 권수로 이루어져 있다.</div>
        <div>3. 각 도서관의 총 책 보유량을 조회할 수 있다.</div>
        <div>
          4. 도서 카테고리를 선택하면, 각 도서관들의 선택한 카테고리 책 수를
          조회할 수 있다.
        </div>
      </div>

      <select
        onChange={(event) => handelCategory(event.target.value)}
        
      >
        <option value="">장르를 선택하세요</option>
        {bookCategory.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>

      <div>
        {bookList.map((book) => {
          return (
            <div>
              {book.name} / {book.qty} 권
            </div>
          );
        })}
      </div>
      <hr></hr>

      <div>
        {libraryDB.map((library) => {
          return (
            <div>
              <div>
                {library.name}: {totalBook(library.book)} 권
              </div>
              <div>{getBookList(library.book)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function requestLibraryData() {
  return [
    {
      name: "A 도서관",
      book: [
        {
          category: "문학",
          qty: 50,
        },
        {
          category: "자기계발",
          qty: 30,
        },
        {
          category: "공부",
          qty: 75,
        },
        {
          category: "소설",
          qty: 25,
        },
      ],
    },
    {
      name: "B 도서관",
      book: [
        {
          category: "문학",
          qty: 10,
        },
        {
          category: "자기계발",
          qty: 85,
        },
        {
          category: "공부",
          qty: 25,
        },
        {
          category: "소설",
          qty: 20,
        },
      ],
    },
    {
      name: "C 도서관",
      book: [
        {
          category: "문학",
          qty: 20,
        },
        {
          category: "자기계발",
          qty: 25,
        },
        {
          category: "공부",
          qty: 110,
        },
        {
          category: "소설",
          qty: 5,
        },
      ],
    },
    {
      name: "D 도서관",
      book: [
        {
          category: "문학",
          qty: 0,
        },
        {
          category: "자기계발",
          qty: 0,
        },
        {
          category: "공부",
          qty: 0,
        },
        {
          category: "소설",
          qty: 155,
        },
      ],
    },
  ];
}

export default Index0908;
