import "./welcomepage.scss";

function App() {
  return (
    <>
      <div className="background-video">
        <video autoPlay muted controls={false}>
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Video not supported.
        </video>
      </div>
      <div className="container">
        <div className="logo-container">
          <img src="//i.imgur.com/kgLSWA3.png" alt="logo" />
        </div>
        <p className="title">Bientôt en ligne</p>
        <p>
          Vous pourrez retrouver ici les créations de l’amienoise qui dessine,
          sur une carte d’Amiens
        </p>
      </div>
      <div className="social-medias">
        <p>pour patientez, retrouvez mes creations sur les réseaux</p>
        <div className="social-bubble-container">
          <a href="https://www.facebook.com/p/Camille-Immo-Gaillot-100065234250445/?locale=mk_MK" target="_blank" >
            <img src="https://imgur.com/r1OjUk9.png" alt="" />
          </a>
          <a href="https://www.instagram.com/l.amienoise.qui.dessine/" target="_blank">
            <img src="https://imgur.com/uSezAle.png" alt="" />
          </a>
          <a href="mailto:contact@amienoisequidessine.fr" target="_blank">
            <img src="https://imgur.com/OhC7ffc.png" alt="" />
          </a>
          <a href="https://www.threads.net/@l.amienoise.qui.dessine" target="_blank">
            <img src="https://imgur.com/xrcrD0X.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
