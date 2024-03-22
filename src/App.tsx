import { useRef } from "react";
import "./welcomepage.scss";

function App() {
  const logoRef = useRef<HTMLImageElement>(null);
 
  const expandHeader = () => {
    if (logoRef && logoRef.current) {
      logoRef.current!.style.width = "8rem";
      logoRef.current!.style.paddingTop = "1rem";
    }
  };
  
  const minimizeHeader = () => {
    if (logoRef && logoRef.current) {
      logoRef.current!.style.width = "18rem";
      logoRef.current!.style.paddingTop = "0";
    }
  };

  const video = document.querySelector("video"); // Ici je cible la balise video.
  if (video) video.playbackRate = 0.8; // Et ici je ralentis légèrement la video.

  return (
    <>
      <div className="background-video">
        <video autoPlay muted controls={false} loop playsInline>
          <source src="assets/aqd-intro-video.mp4" type="video/mp4" />
          Video not supported.
        </video>
      </div>

      {/* HEADER */}

      <div id="header" onTouchStart={minimizeHeader}>
        <img
          ref={logoRef}
          src="//i.imgur.com/kgLSWA3.png"
          alt="logo de l'amiénoise qui dessine"
        />

        <h1>L'Amiénoise qui dessine</h1>
        <h3>Bientôt en ligne</h3>
      </div>

      {/* CONTENT */}
      <div className="content" onTouchStart={expandHeader}>
        <div className="blur-bg"></div>
        <p>
          En attendant de pouvoir regarder notre ville d'Amiens à travers mes
          yeux, mon histoire et mes pinceaux, je me propose de vous faire
          patienter en vous racontant l’histoire de l’Amiénoise qui dessine.
        </p>
        <p>
          J’ai appris à aimer Amiens dès la sortie de la gare ! Fraîchement
          bachelière, c’est chez les Amiénoises et Amiénois que je me suis
          installée pour mes études à l’UPJV rayon droit et science po, dans le
          fameux quartier Saint-Leu, grand lieu de tentation pour les soirées
          étudiantes/zinzin, et bonheur visuel le jour grâce à son ambiance
          touristique et historique.
        </p>
        <p>
          En chemin, j'ai salué la beauté de notre Cathédrale sans manquer
          d’être impressionnée par la prouesse architecturale de Notre-Dame
          d’Amiens.
        </p>
        <p>
          Si mon récit ressemble à un guide touristique c’est que sur ma route
          j'ai croisé l’immobilier!
        </p>
        <p>
          C’est fou la vie, on passe des années à faire des études et même en
          les réussissant on change les plans.
        </p>
        <p>
          {" "}
          C’est donc avec mon master en droit des affaires que j'ai opté pour un
          job d’agent immobilier qui aura fait mon bonheur professionnel pendant
          12 ans.
        </p>
        <p>
          J'ai fait du droit parce que je pensais que le commerce m’ennuierait
          mais je ne savais pas qu'il était d'une richesse humaine incroyable!
          Et estimer des maisons, des appartements, des immeubles pour
          accompagner les changements de vie des familles, des couples, et des
          investisseurs aura été mon plaisir quotidien!
        </p>
        <p>
          Et j’ai appris à voir notre ville avec l’œil de tous ces clients qui
          la découvraient, y revenaient après des années ailleurs et de ceux qui
          la quittaient…
        </p>
        <p>
          Et sur ma route est apparu le dessin et l’aquarelle! Comme ça! Sans
          préavis!
        </p>
        <p>
          J'ai regardé mon frère faire une esquisse de ma maison depuis mon
          jardin, la peindre et paf ça a fait clic! Il fallait que j’essaie! Oui
          comme tous les enfants j’avais déjà dessiné, mais mon niveau en était
          resté là.
        </p>
        <p>
          Je doute qu’un talent ne pousse dans la nuit du jour au lendemain mais
          ce qui avait changé c’est le plaisir que j’avais à essayer de dessiner
          une maison.
        </p>
        <p>
          Parce que j’imagine en même temps la vie à l'intérieur, remplie de mes
          souvenirs de tant d'Amiénoises visitées, estimées, vendues, des
          histoires qui m’ont été racontées.
        </p>
        <p>
          Et pendant ce temps j'ai progressé au point d’en arriver à vouloir
          compiler toutes les maisons, les Amiénoises classiques à une ou deux
          fenêtres, les belles bourgeoises les monuments de notre ville que j'ai
          dessinés!
        </p>
        <p>
          Bientôt vous trouverez sur ce site le plaisir de voir si votre maison
          a été peinte ou celle de vos voisins, parents, amis… si vous
          reconnaissez les monuments…
        </p>
        <p>
          Et le plaisir de commander votre propre illustration de maison, vous
          la glisserez dans un papier cadeau pour votre amoureux, vos parents,
          grands-parents, vos amis qui se marient ou pendent la crémaillère ou
          dans un cadre pour décorer votre lieu de vie avec l’âme d’une
          Amiénoise qui dessine.
        </p>
        <p>
          À bientôt les curieux, amoureux de chez eux, amoureux d’Amiens, les
          amateurs d’art et tous ceux qui le veulent.
        </p>
      </div>

      {/* FOOTER */}
      <div className="footer" onTouchStart={minimizeHeader}>
        <p>En attendant, retrouvez mes creations sur les réseaux sociaux !</p>
        <div className="social-bubble-container">
          <a
            href="https://www.facebook.com/p/Camille-Immo-Gaillot-100065234250445/?locale=mk_MK"
            target="_blank"
          >
            <img src="assets/icon-facebook.svg" alt="logo amiénoise facebook" />
          </a>
          <a
            href="https://www.instagram.com/l.amienoise.qui.dessine/"
            target="_blank"
          >
            <img
              src="assets/icon-instagram.svg"
              alt="logo amiénoise instagram"
            />
          </a>
          <a href="mailto:contact@amienoisequidessine.fr" target="_blank">
            <img src="assets/icon-mail.svg" alt="logo amiénoise mail" />
          </a>
          <a
            href="https://www.threads.net/@l.amienoise.qui.dessine"
            target="_blank"
          >
            <img src="assets/icon-thread.svg" alt="logo amiénoise thread" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
