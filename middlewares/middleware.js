import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function authMiddleware() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    if (!token) {
        return false;
    }
    try {
        let decoded = jwt.verify(token.value, process.env.JWT_SECRET || "testkey");
        return decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        return false;
    }
}