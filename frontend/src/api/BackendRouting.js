// src/api/BackendRouting.js
const backendRouting = "http://localhost:4000";

const API = {
  CREATE_TICKET: { url: `${backendRouting}/ticket`, method: "post" },
  GET_TICKETS: { url: `${backendRouting}/tickets`, method: "get" },
  UPDATE_TICKET: (id) => ({ url: `${backendRouting}/${id}`, method: "put" }),
};

export default API;
