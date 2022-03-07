import axios from "axios";

const newsianApi = axios.create({
  baseURL: "https://ncnewsian.herokuapp.com/api",
});

export function getArticles() {
  return newsianApi.get("/articles").then(({ data: { articles } }) => articles);
}
