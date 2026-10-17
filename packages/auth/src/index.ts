import Config from "dotenv";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@planly/db";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";
Config.config({
  path: "../../.env",
});
const resend = new Resend(process.env.RESEND_API_KEY);
export const auth = betterAuth({
  baseURL: "http://localhost:3000",
  trustedOrigins: ["http://localhost:5173"],
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLEINT_SECRET!,
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url, metadata }, ctx) => {
       sendMagicLinkfunction(email)
      },
    }),
  ],
});

async function sendMagicLinkfunction(email: string) {
  const { data, error } = await resend.emails.send({
    from: "planly@gmail.com",
    to: email,
    subject: "Verify your accound",
    html: `<html>
<div style="font-family:Arial,sans-serif;text-align:center;background:#f3f5f9;padding:40px 20px;">
  <div style="max-width:400px;margin:auto;background:#fff;padding:35px 20px;border-radius:12px;">
    <h1 style="color:#4f46e5;">✦ YourApp</h1>
    <h2>Welcome back!</h2>
    <p style="color:#666;">Sign in securely without a password.</p>
    <a href="{{magic_link}}" style="display:inline-block;background:#4f46e5;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;">
      Sign In
    </a>
  </div>
</div></html>`,
  });
}
