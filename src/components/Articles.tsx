import "../style/globals.css";
import "../style/articles.css";

interface ArticleProps {
  keyword: string;
  title: string;
  image: string;
  article: string;
}

function Articles({ keyword, title, image, article }: ArticleProps) {
  return (
    <>
      <section className="articles-main">
        <figure className="articles-figure">
          <img src={image} alt="" />
        </figure>
        <section className="articles-articles">
          <h4 className="articles-hashtag">{keyword} </h4>
          <h4 className="articles-title">{title}</h4>
          <p className="articles-content">{article}</p>
          <p className="articles-link">Voir plus</p>
        </section>
      </section>
    </>
  );
}
export default Articles;
