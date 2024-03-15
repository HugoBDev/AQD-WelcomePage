import "./welcomepage.scss";

function App() {

  const video = document.querySelector('video'); // Ici je cible la balise video.
  if(video) video.playbackRate = 0.8; // Et ici je ralentis légèrement la video.

  return (
    <>
      <div className="background-video">
        <video autoPlay muted controls={false} loop playsInline>
          <source
            src="assets/aqd-intro-video.mp4"
            type="video/mp4"
            
          />
          Video not supported.
        </video>
      </div>




      {/* CONTENT */}
      <div className="content">

          <img src="//i.imgur.com/kgLSWA3.png" alt="logo de l'amiénoise qui dessine" />

        <h1>L'Amiénoise qui dessine</h1>
        <h3>Bientôt en ligne</h3>
        <p>
          Ici, vous pourrez retrouver les dessins et aquarelles de l’amiénoise qui dessine...
        </p>

      </div>



      {/* FOOTER */}
      <div className="footer">
        <p>En attendant, retrouvez mes creations sur les réseaux sociaux !</p>
        <div className="social-bubble-container">
          <a href="https://www.facebook.com/p/Camille-Immo-Gaillot-100065234250445/?locale=mk_MK" target="_blank" >
            <img src="assets/icon-facebook.svg" alt="logo amiénoise facebook" />
          </a>
          <a href="https://www.instagram.com/l.amienoise.qui.dessine/" target="_blank">
            <img src="assets/icon-instagram.svg" alt="logo amiénoise instagram" />
          </a>
          <a href="mailto:contact@amienoisequidessine.fr" target="_blank">
            <img src="assets/icon-mail.svg" alt="logo amiénoise mail" />
          </a>
          <a href="https://www.threads.net/@l.amienoise.qui.dessine" target="_blank">
            <img src="assets/icon-thread.svg" alt="logo amiénoise thread" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
