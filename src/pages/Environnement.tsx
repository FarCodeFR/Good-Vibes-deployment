import { useLoaderData } from "react-router-dom";
import ArticleEnvironnement from "../components/Article-Environnement/ArticleEnvironnement";

interface news {
  id: number;
  keyword: string;
  title: string;
  image: string;
  article: string;
}

function Environnement() {
  const data = useLoaderData() as news[];
  const filteredEnvironnement = data.filter((a) => {
    return a.keyword.includes("environnement");
  });

  return (
    <main className="container-environnement-main">
      <section className="container-environnement">
        <h1>Environnement</h1>
        <div className="trait-environnement">
          <hr />
        </div>
      </section>
      <section className="container-environnement-article">
        {filteredEnvironnement.map((el) => {
          return (
            <ArticleEnvironnement
              key={el.id}
              title={el.title}
              keyword={el.keyword}
              image={el.image}
              article={el.article}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Environnement;
