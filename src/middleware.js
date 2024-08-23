export { default } from "next-auth/middleware";

// matcher untuk memproteksi page yang dimasukan
// path menjaga page apa saja yang termasuk didalam users
export const config = { matcher: ["/users/:path*"] };
