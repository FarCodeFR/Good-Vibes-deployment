import "../Article-Environnement/Environnement.css";

interface newsI {
  keyword: string;
  title: string;
  image: string;
  article: string;
}

function ArticleEnvironnement({ keyword, title, image, article }: newsI) {
  return (
    <>
      <section className="articles-societe">
        <figure className="articles-figure-societe">
          <img src={image} alt="" className="image-societe" />
        </figure>
        <article>
          <h2 className="articles-hashtag-societe">{keyword}</h2>
          <h3 className="articles-title-societe">{title}</h3>
          <p className="articles-content-societe">{article}</p>
          <p className="articles-link-societe">Voir plus</p>
        </article>
      </section>
    </>
  );
}

export default ArticleEnvironnement;
