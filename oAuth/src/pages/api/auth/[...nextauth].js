import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENTE_SECRECT,
      scope: "read:user",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({
      user: User,
      account: Account,
      profile: Profile
    }) {
      return true;
    },
  },
});