"use server";

import { redirect } from "next/navigation";
import connectDB from "../db/conf";
import userModel from "../db/models";
import { setSession } from "../Sessions/sessions";

export async function enterGame(_currentState: unknown, formData: FormData) {
  try {
    let username = formData.get("username") as string;
    let color = formData.get("color") as string;

    if (!username || !color) {
      return "Please fill out the form";
    }

    await connectDB();

    const user = new userModel({
      username,
      color,
      lastActive: new Date(),
      posX: 0,
      posY: 0,
    });
    user.save();

    setSession(user);
  } catch (error) {
    return error as string;

    throw error;
  }

  redirect("/game");
}

export async function moveUser(userId: string, posX: number, posY: number) {
  try {
    await connectDB();

    await userModel.findByIdAndUpdate(
      { _id: userId },
      { posX, posY, lastActive: new Date() }
    );
  } catch (error) {
    return error as string;

    throw error;
  }
}

export async function getUsers() {
  try {
    await connectDB();

    return JSON.parse(JSON.stringify(await userModel.find()));
  } catch (error) {
    throw error;
  }
}
