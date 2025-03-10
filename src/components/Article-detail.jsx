import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../servise/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import { Loader } from "../ui";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="article-detail">
          <h1>{articleDetail.title}</h1>
          <p>{articleDetail.body}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
