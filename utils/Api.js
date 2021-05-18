import { BASE_URL } from "../config";
import axios from "axios";

export const postData = async (url, payload) => {
  url = `${BASE_URL}${url}`;
  try {
    return await axios.post(url, payload, {
      headers: {},
    });
  } catch (err) {
    console.error(err);
  }
};
