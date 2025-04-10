const Quiz1 = () => {
  const productList = {
    products: [
      {
        title: "무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  return (
    <div>
      <h1>Quiz 1</h1>
      {productList.products.map((v, i) => (
        <div key={v.id}>
          <h2>
            {i + 1} {v.title}
          </h2>
          <p>{v.price}원</p>
        </div>
      ))}
    </div>
  );
};

export default Quiz1;
