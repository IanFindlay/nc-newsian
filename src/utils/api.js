import axios from "axios";

const newsianApi = axios.create({
  baseURL: "https://ncnewsian.herokuapp.com/api",
});

export function getArticles(pageNumber, topic) {
  return newsianApi
    .get("/articles", { params: { p: pageNumber, topic } })
    .then(({ data }) => data);
}

export function getTopics() {
  return newsianApi.get("/topics").then(({ data: { topics } }) => topics);
}
