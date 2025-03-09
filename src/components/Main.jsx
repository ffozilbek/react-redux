import { useSelector } from "react-redux";
import { Card } from "./index";
import { useNavigate } from "react-router-dom";

function Main() {
  const { articles } = useSelector((state) => state.article);
  const navigate = useNavigate();

  const navigatorHandler = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="container">
      <div className="cards my-5">
        {articles.map((article) => {
          return (
            <Card
              text={article.author.bio}
              key={article.id}
              event={() => navigatorHandler(article.slug)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
