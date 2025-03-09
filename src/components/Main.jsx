import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const { articles } = useSelector((state) => state.article);

  return (
    <div className="container">
      <div className="cards my-5">
        {articles.map((article) => {
          return (
            <div className="card" key={article.id}>
              {article.author.bio}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
