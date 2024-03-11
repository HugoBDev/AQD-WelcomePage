import "./welcomepage.scss";

function App() {
  return (
    <>
      <div className="background-video">
        <video autoPlay muted controls={false} >
          <source
            src="https://dtn44hfc1xtr4.cloudfront.net/x/f/xfc9z5k.mp4?Expires=1710257844&Signature=ONqFluOQ1S6V~urxZ9RWLejzMEFlbtNcOU5-cw5O300gFRg7EKtUtX~R-U4YspIwvskFFD8wNCFR~wbT5HEh1hw562y4fpwFk-OcoAIf2JG7Nu2wHOOoBdVobnNaZydg7rjC7pGVWoEn1SXkrS2jD56nEqraxRH2bQr6gPsrrMeC-3BU4KY4bpoTYy-1pCp1MVxZzdPs68JjeeTHJQ10j9r6z0wsUoxOAj3apdT5ytqqOQIHLoZB76Lu1pUv7WpHkmWV0vwWs9zSHEitU577cqch0OP1vdznJ2lIKcFKTM8GXt0q0CIM7Ql7qk81SgTC9aHfNFjcBwmN8eNdAKzHsQ__&Key-Pair-Id=APKAIAOH4YUSYMI7SPBA"
            type="video/mp4"
          />
          Video not supported.
        </video>
      </div>
      <div className="container">
        <div className="logo-container">
          <img src="" alt="logo" />
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
          <img src="src/assets/icon-facebook.svg" alt="" />
          <img src="src/assets/icon-instagram.svg" alt="" />
          <img src="src/assets/icon-mail.svg" alt="" />
          <img src="src/assets/icon-thread.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
