import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            ClientId: 'proccess.env.GOOGLE_ID',
            ClientSecret:'process.env.GOOGLE_CLIENT_SECRET',
        })
    ],
    async sessionStorage({session}) {
    
    },
    async signIn({profile}) {
        try {
            
        } catch (error) {
            
        }
    }
})

export {handler as GET, handler as POST};
