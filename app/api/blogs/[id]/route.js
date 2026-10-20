import { connectDB } from "@/config/mongodb";
import Blog from "@/models/Blog";
import {authMiddleware} from "@/middlewares/middleware";

export async function GET(request, { params }) {
  const { id } = await params;
  await connectDB();
    const data = await Blog.findById(id);
  return Response.json({ data });
  }

  export async function DELETE(request, { params }) {
    const { id } = await params;
    const user = await authMiddleware();
    if (!user) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    await connectDB();
    const data = await Blog.findByIdAndDelete(id);
    return Response.json({message: "Blog deleted successfully", data });
  }