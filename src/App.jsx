import { Route, Routes } from "react-router-dom";
import { Main, Navbar, LogIn, Register, ArticleDetail } from "./components/";
import { useEffect } from "react";
import AuthService from "./servise/auth";
import { useDispatch, useSelector } from "react-redux";
import { signinUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-store";
import ArticleService from "./servise/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";
// import { Loader } from "./ui";
import { Loader } from "./ui";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.article);
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signinUserSuccess(response.user));
    } catch (error) {
      console.log("error");
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticlesSuccess(response.articles));
    } catch (error) {}
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <Navbar />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<LogIn />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<ArticleDetail />} path="/article/:slug" />
      </Routes>
    </div>
  );
}

export default App;
