import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: "102978749738-g25kcu3ukrhenalsib7j4n638ahb8jnu.apps.googleusercontent.com",
            clientSecret:"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" 
        })
    ],
    session:{
        jwt:true
    },
    jwt:{
        secret:'alkdnsdncsnjcsj'
    }
})