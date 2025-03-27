const Food = ({ name, image }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} width="200px" alt={name} />
    </div>
  );
};

export default Food;
