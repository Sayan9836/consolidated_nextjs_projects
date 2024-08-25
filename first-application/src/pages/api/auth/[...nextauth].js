
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GitHub({
      clientId:"7af986906b5bbe2676f5",
      clientSecret:"2b598cf688717965f886f6d9ea65667b54655d72"
    }),
  ],
  database:"mongodb+srv://sayan:1234567890@cluster0.alnlgms.mongodb.net/?retryWrites=true&w=majority",
  session:{
    jwt:true
  },
  jwt:{
    secret:'abcdefghijkl'
  }
})


