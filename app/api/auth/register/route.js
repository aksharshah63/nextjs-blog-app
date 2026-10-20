import { connectDB } from "@/config/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (username.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 8) {
    return Response.json(
      { error: "Enter a username, valid email, and password of at least 8 characters" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "An account with this email already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    return Response.json(
      {
        message: "User registered successfully",
        user: { id: newUser._id, username: newUser.username, email: newUser.email },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      return Response.json({ error: "An account with this email already exists" }, { status: 409 });
    }

    return Response.json({ error: "Unable to create your account" }, { status: 500 });
  }
}