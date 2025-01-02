import "../style/Apropos.css";

export default function Apropos() {
  return (
    <>
      <main>
        <div className="div-title">
          <hr className="propos-tiret" />
          <h1 className="title-propos">À propos</h1>
          <hr className="propos-tiret" />
        </div>
        <div className="text-propos">
          <p className="text-propos-01">
            Né du confinement et de l’atmosphère suffocante qui s’en dégageait,
            Good-Vibes ne s’est donné qu’une mission : vous faire sourire ; un
            but : faire ressortir le plus positif de l’actualité et rassembler
            les bonnes nouvelles !
          </p>
          <p className="text-propos-02">
            Notre ambition est de montrer l’actualité sous un jour nouveau,
            mettre en lumière des bonnes nouvelles qui chaque jour naissent en
            silence, sans que personne ne les porte à votre connaissance. Nous
            voulons vous parler des progrès scientifiques et environnementaux,
            d’initiatives sociales et entrepreneuriales inspirantes, de projets
            culturels et technologiques passionnants. Pour cela, nous vous
            proposons quotidiennement une série d’articles et vidéos, à
            retrouver sur notre site ou nos réseaux-sociaux, qui vise à
            illuminer votre journée. Nous avons l’ambition de rendre votre
            quotidien un peu plus doux en vous apportant une dose de bonnes
            nouvelles.
          </p>
          <img
            alt="logo-post-it"
            src="/src/assets/images/logo-postit.png"
            className="logo-propos"
          />
          <img
            alt="troll"
            src="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif"
            className="troll"
          />
        </div>
      </main>
    </>
  );
}
