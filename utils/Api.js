import { BASE_URL } from "../config";
import axios from "axios";

const requests = async (url = "", method = "GET", body = {}) => {
  url = `${BASE_URL}${url}`;
  const payload = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, payload);
  return await res.json();
};

export const postData = async (url, payload) => {
  try {
    return await requests(url, "POST", payload);
  } catch (err) {
    console.error(err);
  }
};
