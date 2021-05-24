import { is_authenticate } from "../../../services/prisma/validation/articleValidation";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  let response = { status: false };
  let status = 404;

  if (req.method === "POST") {
    response = await login(req.body);
    status = 200;
  }

  res.status(status).send(response);
}

const login = async (data) => {
  let payload = {
    status: true,
    message: "Login Successfully.",
  };

  try {
    const valid = await is_authenticate(data);
    if (!valid.status) {
      return valid;
    }
    payload["data"] = valid.data;
  } catch (error) {
    payload.status = false;
    payload.message = "Something went wrong!";
    console.log(error);
  }
  return payload;
};
