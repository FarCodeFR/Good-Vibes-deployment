import { useLoaderData } from "react-router-dom";
import ArticleSociete from "../components/Article-societe/ArticleSociete";

interface news {
  id: number;
  keyword: string;
  title: string;
  image: string;
  article: string;
}

function Societe() {
  const data = useLoaderData() as news[];
  const filteredSociete = data.filter((e) => {
    return e.keyword.includes("société");
  });

  return (
    <main className="container-societe-main">
      <section className="container-societe">
        <h1>Société</h1>
        <div className="trait-societe">
          <hr />
        </div>
      </section>
      <section className="container-societe-article">
        {filteredSociete.map((el) => {
          return (
            <ArticleSociete
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
export default Societe;
