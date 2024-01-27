import type { NextAuthConfig } from 'next-auth';
import Github  from "next-auth/providers/github";

export default {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
} satisfies NextAuthConfig;