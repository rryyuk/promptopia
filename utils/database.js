// import mongoose from "mongoose";

// let isConnected = false;

// export const connectTODB = async () => {
//     mongoose.set('strictQuery', true);
//     if(isConnected) {
//         console.log('MongoDB connected already');
//         return;
//     }
//     try {
//         await mongoose.connect(process.nextTick.MONGODB_URI, {
//             dbName: "share_prompt",
//             useNewUrlParser:true, 
//             useUnifiedTopology:true,
//         })
//         isConnected = true;
//         console.log('MongoDB connected');

//     } catch (error) {
//         console.log('error')
//     }
// }