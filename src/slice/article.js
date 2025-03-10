import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: [],
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} = articleSlice.actions;
export default articleSlice.reducer;
