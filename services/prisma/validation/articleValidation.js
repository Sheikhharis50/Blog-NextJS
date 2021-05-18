import { validateModel } from "../methods";
import prisma from "../prisma";
import bcrypt from "bcrypt";

const articleRequiredAttrs = ["first_name", "last_name", "password", "email"];

export const articleValidation = async (payload) => {
  let valid = validateModel(payload, articleRequiredAttrs);
  if (valid.length)
    return {
      status: false,
      message: `${valid.join(", ")} not provided!`,
    };
  if (
    await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    })
  )
    return {
      status: false,
      message: `Email already exists!`,
    };
  return { status: true };
};

export const is_authenticate = async ({ email, password }) => {
  if (!email || !password) {
    return {
      status: false,
      message: `Email or password not provided!`,
    };
  }
  let user = await prisma.user.findUnique({
    where: { email: email },
  });

  const match = await bcrypt.compare(password, user?.password);

  if (user && match) {
    delete user.password;
    return {
      status: true,
      data: user,
    };
  } else
    return {
      status: false,
      message: `User not found!`,
    };
};
