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

export function getArticleById(articleId) {
  return newsianApi
    .get(`/articles/${articleId}`)
    .then(({ data: { article } }) => article);
}

export function patchArticleVotes(articleId, amount) {
  return newsianApi.patch(`/articles/${articleId}`, { inc_votes: amount });
}

export function getArticleComments(articleId, limit) {
  return newsianApi
    .get(`articles/${articleId}/comments?limit=${limit}`)
    .then(({ data: { comments } }) => comments);
}

export function postComment(articleId, username, body) {
  return newsianApi.post(`articles/${articleId}/comments`, { username, body });
}

export function deleteComment(commentId) {
  return newsianApi.delete(`comments/${commentId}`);
}
