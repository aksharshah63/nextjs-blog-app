import { connectDB } from "@/config/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";

export async function POST(req,{params}) {
    try {
    await connectDB();
    const { email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email, username: existingUser.username },
      process.env.JWT_SECRET || "testkey"
    );
    let cookiesStore =await cookies();
    cookiesStore.set("token", token, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 });
    return Response.json({ message: "User Login successfully", user: existingUser, token });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to create user",
        details: error.message,
      },
      { status: 500 }
    );
  }
}