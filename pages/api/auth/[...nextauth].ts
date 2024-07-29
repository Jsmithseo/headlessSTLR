import NextAuth from "next-auth";
import { authOptions } from "../../nextAuthOptions/options";

export default NextAuth(authOptions);
