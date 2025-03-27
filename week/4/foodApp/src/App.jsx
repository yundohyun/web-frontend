import Food from "./components/Food";

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "https://i.namu.wiki/i/-su66HVDn7vTOM9ea_HUv_hqgD4PWsI1ldKdrw_l2mp1dJx_ioUdvmvPgvHd-nA8Qke1q3skZULMGurkJdEQQM0KH2j8ePGco4douPaJp02flbhzrH3ycKA_gDpnTslg_i-tgo078tr8uwV3zngxyA.jpg",
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map(({ name, image }, idx) => (
        <Food key={idx} name={name} image={image} />
      ))}
    </div>
  );
}

export default App;
