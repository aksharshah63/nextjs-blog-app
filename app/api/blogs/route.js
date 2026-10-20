import { connectDB } from "@/config/mongodb";
import Blog from "@/models/Blog";
import {authMiddleware} from "@/middlewares/middleware";


export async function GET() {
  try {
    const user = await authMiddleware();
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    await connectDB();
    const blogs = await Blog.find({ userId: user.userId });
    return Response.json({ blogs });
  } catch (error) {
    return Response.json(
      {
        error: "MongoDB is unavailable",
        details: error.message,
      },
      { status: 503 }
    );
  }
}

export async function POST(request) {
  try {
    const user = await authMiddleware();
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    await connectDB();
    const data = await request.json();
    const blog = await Blog.create({
      title: data.title,
      body: data.body,
      thumbnail: data.thumbnail || "",
      userId: user.userId,
    });
    return Response.json({ message: "Blog created successfully", blog });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to create blog",
        details: error.message,
      },
      { status: 500 }
    );
  }
} 