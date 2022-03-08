import axios from "axios";

const newsianApi = axios.create({
  baseURL: "https://ncnewsian.herokuapp.com/api",
});

export function getArticles(pageNumber) {
  return newsianApi.get(`/articles?p=${pageNumber}`).then(({ data }) => data);
}

export function getTopics() {
  return newsianApi.get("/topics").then(({ data: { topics } }) => topics);
}
