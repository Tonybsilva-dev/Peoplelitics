export default {
    jwt:{
      secret: `${process.env.JWT_SECRET}`,
      expiresIn: `${process.env.EXPIRES_IN}`,
    }
  }