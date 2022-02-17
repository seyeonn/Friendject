import { apiInstance } from "./index.js";

const api = apiInstance();

function getQuestionList(success, fail) {
  api.get(`icebreaking/questions`).then(success).catch(fail);
}

function getOneTeam(teamId, success, fail) {
  api.get(`team/${teamId}`).then(success).catch(fail);
}

function joinTeam(teamInfo, success, fail) {
  api.post(`team/join`, JSON.stringify(teamInfo)).then(success).catch(fail);
}

function createTeam(teamRegInfo, success, fail) {
  api
    .post(`team/create`, JSON.stringify(teamRegInfo))
    .then(success)
    .catch(fail);
}

function getTeamList(userId, success, fail) {
  api.get(`team/list/${userId}`).then(success).catch(fail);
}

export { getQuestionList, getOneTeam, joinTeam, createTeam, getTeamList };
