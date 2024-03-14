import "./welcomepage.scss";

function App() {

  const video = document.querySelector('video'); // Ici je cible la balise video.
  if(video) video.playbackRate = 0.8; // Et ici je ralentis légèrement la video.

  return (
    <>
      <div className="background-video">
        <video autoPlay muted controls={false} loop >
          <source
            src="src/assets/aqd-intro-video.mp4"
            type="video/mp4"
          />
          Video not supported.
        </video>
      </div>




      {/* CONTENT */}
      <div className="content">

          <img src="//i.imgur.com/kgLSWA3.png" alt="logo" />

        <h1>L'Amiénoise qui dessine</h1>
        <h3>Bientôt en ligne</h3>
        <p>
          Ici, vous pourrez retrouver ici les dessins et aquarelles de l’amiénoise qui dessine...
          
        </p>

      </div>



      {/* FOOTER */}
      <div className="footer">
        <p>En attendant, retrouvez mes creations sur les réseaux sociaux !</p>
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
