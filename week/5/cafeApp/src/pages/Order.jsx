import { useState } from "react";

const Order = () => {
  const menu = [
    { name: "Espresso", price: 2800 },
    { name: "Americano", price: 3000 },
    { name: "Latte", price: 3500 },
    { name: "Cappuccino", price: 3500 },
    { name: "Macchiato", price: 3500 },
    { name: "Mocha", price: 4000 },
    { name: "Green Tea Latte", price: 4500 },
  ];
  const [menuSelect, setMenuSelect] = useState(
    new Array(menu.length).fill(false)
  );

  const setMenuSelectIndex = (index) => {
    const newSelect = [...menuSelect];
    newSelect[index] = !newSelect[index];
    setMenuSelect(newSelect);
  };

  return (
    <>
      <div>
        <h1>주문하기</h1>
        <h2>메뉴</h2>
        {menu.map(({ name, price }, index) => (
          <dl id={index}>
            <dt>{name}</dt>
            <dd>
              {price}원
              <small>
                <button onClick={() => setMenuSelectIndex(index)}>
                  {menuSelect[index] ? "선택 취소" : "선택하기"}
                </button>
              </small>
            </dd>
          </dl>
        ))}
      </div>
      <div>
        <h1>주문한 음료</h1>
        <ul>
          {menu
            .filter((_, i) => menuSelect[i])
            .map(({ name }) => (
              <li>{name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h1>총 금액</h1>
        {menu.reduce(
          (acc, { price }, index) => (menuSelect[index] ? acc + price : acc),
          0
        )}
        원
        <p>
          <button>주문하기</button>
        </p>
      </div>
    </>
  );
};

export default Order;
