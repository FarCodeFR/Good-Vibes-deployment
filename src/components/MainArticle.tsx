import "../style/mainArticle.css";

function MainArticle() {
  return (
    <article className="mainArticle">
      <img
        src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2021/02/15/node_937362/50484262/public/2021/02/15/B9726150929Z.1_20210215181714_000%2BGBUHK10DG.1-0.jpg?itok=r6Jd65Y-1613409981"
        alt="Un champion qui fait le cri de la mouette"
        className="mainArticle__image"
      />

      <div className="mainArticle__content">
        <div className="mainArticle__hashtags">
          <span className="mainArticle__hashtag">#festivités</span>
          <span className="mainArticle__hashtag">#carnaval</span>
          <span className="mainArticle__hashtag">#Dunkerque</span>
        </div>
        <h2 className="mainArticle__title">
          Une énorme fierté: le champion du monde du cri de la mouette a été élu
          au carnaval de Dunkerque
        </h2>
        <p className="mainArticle__text">
          Steven Seagull, désormais champion mondial, a marqué de son empreinte
          cette édition du carnaval, un moment qu'il n'oubliera jamais. Ce
          dimanche 11 février, le carnaval de Dunkerque a débuté en grande pompe
          avec la première journée des Trois Joyeuses. Parmi les temps forts de
          la journée : la bande de Dunkerque qui a pris son départ à 15 heures
          du boulevard Sainte-Barbe, le lancer de harengs devant l'hôtel de
          ville, et bien sûr, l'élection très attendue du champion du monde du
          cri de la mouette.
        </p>
        <a
          href="https://www.bfmtv.com/grand-littoral/une-enorme-fierte-le-champion-du-monde-du-cri-de-la-mouette-a-ete-elu-au-carnaval-de-dunkerque_AV-202402110473.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mainArticle__link"
        >
          Voir plus
        </a>
      </div>
    </article>
  );
}

export default MainArticle;
