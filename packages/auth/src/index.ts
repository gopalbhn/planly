import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@planly/db"
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
    database:prismaAdapter(db,{
        provider:"postgresql"
    }),
    socialProviders:{
        google:{
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLEINT_SECRET!,
        }
    },
    plugins: [
        magicLink({ 
            sendMagicLink: async ({ email, token, url, metadata }, ctx) => { 
             
            } 
        }) 
    ]
});