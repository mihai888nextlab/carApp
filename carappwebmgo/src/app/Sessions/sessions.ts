"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setSession(user: {
  _id: string;
  username: string;
  color: string;
  lastActive: Date;
}) {
  cookies().set("user", JSON.stringify(user), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}

export async function getSession() {
  const data = cookies().get("user")?.value;

  if (!data) {
    redirect("/");
  }

  return JSON.parse(data);
}
