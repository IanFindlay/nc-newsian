import axios from "axios";

const newsianApi = axios.create({
  baseURL: "https://ncnewsian.herokuapp.com/api",
});

export function getArticles(pageNumber, topic, sort_by, order, limit) {
  return newsianApi
    .get("/articles", {
      params: { p: pageNumber, topic, sort_by, order, limit },
    })
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

export function getArticleComments(articleId) {
  return newsianApi
    .get(`articles/${articleId}/comments?limit=0`)
    .then(({ data: { comments } }) => comments);
}

export function postComment(articleId, username, body) {
  return newsianApi
    .post(`articles/${articleId}/comments`, { username, body })
    .then(({ data: { comment } }) => comment);
}

export function deleteComment(commentId) {
  return newsianApi.delete(`comments/${commentId}`);
}

export function patchCommentVotes(commentId, amount) {
  return newsianApi.patch(`/comments/${commentId}`, { inc_votes: amount });
}

export function getRandomArticle() {
  return newsianApi
    .get("articles/random")
    .then(({ data: { article } }) => article);
}
