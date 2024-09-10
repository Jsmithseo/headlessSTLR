import { _getUserById } from "../../models/user.model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userId = req.body.userId;
    try {
      const user = await _getUserById(userId);
      console.log(user);
      res.status(200).json({ message: "Hello from Next.js API Route!" });
    } catch (error) {
      console.log(error);
    }
  }
}
