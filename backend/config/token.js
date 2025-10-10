// import jwt, { TokenExpiredError } from "jsonwebtoken"
// const genToken = async (userId)=>{
//     try {
//         const token  = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn: "10d"})
//         return token
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default genToken


import pkg from "jsonwebtoken";

const { sign, TokenExpiredError } = pkg;

const genToken = async (userId) => {
  try {
    const token = await sign(
      { userId },
      process.env.JWT_SECRET,
      { expiresIn: "10d" }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

export { TokenExpiredError };  // if you need it in other files
export default genToken;
