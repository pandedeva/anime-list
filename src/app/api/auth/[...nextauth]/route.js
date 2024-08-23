import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

export const authOption = {
  // data untuk github
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // data untuk project ini
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

// export handler untuk GET dan POST
export { handler as GET, handler as POST };
