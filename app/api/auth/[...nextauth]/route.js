import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// 注意: これは開発/デモ用の簡易認証です。本番環境では適切な認証方法を使用してください。
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "ユーザー名", type: "text" },
        password: { label: "パスワード", type: "password" }
      },
      async authorize(credentials) {
        // 実際のデータベース検索の代わりに、固定値でチェック
        // 本番環境では、データベースからユーザーを検索して適切に認証する
        if (credentials.username === "admin" && credentials.password === "password") {
          return {
            id: "1",
            name: "管理者",
            email: "admin@example.com",
            role: "admin"
          };
        } else if (credentials.username === "member" && credentials.password === "password") {
          return {
            id: "2",
            name: "メンバー",
            email: "member@example.com",
            role: "member"
          };
        }
        
        // 認証失敗
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30日
  },
  callbacks: {
    async jwt({ token, user }) {
      // 初回サインイン時にユーザー情報をトークンに追加
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // セッションにユーザーの役割を追加
      if (token) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || "YOUR_SECRET_KEY_HERE", // 環境変数から取得するか、開発用のダミー値
});

export { handler as GET, handler as POST };
