import prisma from "../../../services/prisma/prisma";
import { articleValidation } from "../../../services/prisma/validation/articleValidation";
import bcrypt from "bcrypt";

const saltRounds = process.env.SALT_ROUNDS
  ? parseInt(process.env.SALT_ROUNDS)
  : 10;

const signup = async (data) => {
  let payload = {
    status: true,
    message: "Signup Successfully.",
  };

  try {
    const valid = await articleValidation(data);
    if (!valid.status) {
      return valid;
    }

    let { first_name, last_name, email, password } = data;
    first_name = first_name.toString().trim();
    last_name = last_name.toString().trim();
    password = password.toString().trim();
    email = email.toString().trim();

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      await prisma.user.create({
        data: {
          email: email,
          first_name: first_name,
          last_name: last_name,
          password: hash,
        },
      });
    });
  } catch (error) {
    payload.status = false;
    payload.message = "Something went wrong!";
    console.log(error);
  }
  return payload;
};

export default async function handler(req, res) {
  let response = { status: false };
  let status = 404;

  if (req.method === "POST") {
    response = await signup(req.body);
    status = 200;
  }

  res.status(status).send(response);
}
