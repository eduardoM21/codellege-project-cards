import "./App.css";

function App() {
  const equipos = [
    {
      imagen:
        "https://www.futbolsapiens.com/wp-content/uploads/2019/11/Logo_ClubAmerica_Azul-990x671.png",
      titulo: "Club America",
      campeonatos: 13,
      valor: 61.3,
    },
    {
      imagen:
        "https://seeklogo.com/images/C/chivas-rayadas-del-guadalajara-campeon-2017-logo-8F06F0A5AE-seeklogo.com.png",
      titulo: "Chivas FC",
      campeonatos: 12,
      valor: 67.02,
    },
    {
      imagen:
        "https://seeklogo.com/images/D/diablos-rojos-del-toluca-logo-AE96B8840A-seeklogo.com.png",
      titulo: "Deportivo Toluca",
      campeonatos: 10,
      valor: 27.61,
    },
    {
      imagen:
        "https://seeklogo.com/images/M/maquina-cementera-de-la-cruz-azul-1997-logo-7587AF6A40-seeklogo.com.png",
      titulo: "Cruz Azul",
      campeonatos: 8,
      valor: 70.51,
    },
    {
      imagen:
        "https://www.designfootball.com/images/joomgallery/originals/football_crests_8/club_leon_20200704_1668339905.png",
      titulo: "Leon FC",
      campeonatos: 7,
      valor: 46.3,
    },
    {
      imagen:
        "https://seeklogo.com/images/P/pumas-de-la-unam-logo-356E15504A-seeklogo.com.png",
      titulo: "Pumas UNAM",
      campeonatos: 7,
      valor: 43.13,
    },
    {
      imagen:
        "https://seeklogo.com/images/T/tigres-uanl-logo-77C7D85C1B-seeklogo.com.png",
      titulo: "Tigres UANL",
      campeonatos: 7,
      valor: 65.34,
    },
    {
      imagen:
        "https://lh3.googleusercontent.com/cAJad0-VbNMlODht6TEglw7yxcst9fEUpcjkE08eckrvSwP-uxDq-j6BUKmL9UAa9DY",
      titulo: "Santos Laguna",
      campeonatos: 6,
      valor: 58.74,
    },
    {
      imagen: "https://iconape.com/wp-content/files/xg/318961/svg/318961.svg",
      titulo: "Pachuca FC",
      campeonatos: 6,
      valor: 49.01,
    },
    {
      imagen:
        "https://i.pinimg.com/236x/b1/ec/ba/b1ecba96c7df802926df4bbc1b8a4899.jpg",
      titulo: "Monterrey FC",
      campeonatos: 5,
      valor: 79.2,
    },
    {
      imagen:
        "https://s3.amazonaws.com/lmxwebsite/media/news/9861/size2/9861.jpg",
      titulo: "Necaxa",
      campeonatos: 3,
      valor: 24.64,
    },
    {
      imagen:
        "https://img.planetafobal.com/2016/07/nuevo-escudo-del-club-puebla-de-mexico.jpg",
      titulo: "Club Puebla",
      campeonatos: 2,
      valor: 21.67,
    },
    {
      imagen:
        "https://agpnoticias.com/news/wp-content/uploads/2020/09/106103467_10157040396102130_7015437354540518800_n.jpg",
      titulo: "Tijuana",
      campeonatos: 1,
      valor: 38.61,
    },
    {
      imagen:
        "https://i.pinimg.com/originals/46/13/3a/46133abaa47c7c134d667c9d3ef02989.jpg",
      titulo: "Atlas FC",
      campeonatos: 1,
      valor: 37.81,
    },
    {
      imagen: "https://tvpacifico.mx/admin/images/noticias/248295-142623.jpg",
      titulo: "Mazatlan FC",
      campeonatos: 0,
      valor: 24.59,
    },
  ];

  return (
    <div className="App">
      <Navar />
      <Walppeper title=" Liga MX BBVA " />

      <div className="container">
        {equipos.map((tarjeta, indice) => {
          return <Tarjeta key={equipos.tarjeta + indice} {...tarjeta} />;
        })}
      </div>
    </div>
  );
}

function Navar() {
  return (
    <div class="navar">
      <a>Inicio </a>
      <a>
        <img
          src="https://seeklogo.com/images/L/liga-mx-logo-2804AE5E80-seeklogo.com.png"
          Alt=""
        />
      </a>
      <a>Registrarse</a>
    </div>
  );
}

function Walppeper(props) {
  return (
    <div className="walpperper">
      <img
        src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/07/13/14999037152542.jpg"
        Alt=""
      />
      <h1>{props.title}</h1>
    </div>
  );
}

function Tarjeta(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.imagen} alt="" />
      <div className="card_info">
        <h1>{props.titulo}</h1>
        <p>
          Titulos: {props.campeonatos}{" "}
          <img
            src="https://images.vexels.com/media/users/3/132538/isolated/preview/89be7c7434a770426cdde009cf710fa7-silueta-de-trofeo-by-vexels.png"
            Alt=""
          />
        </p>
        <p>Valor: {props.valor} mill.€</p>
      </div>
    </div>
  );
}

export default App;
