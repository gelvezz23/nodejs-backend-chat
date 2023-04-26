import { connect } from "mongoose";
const username = process.env.DB_USER || "";
const password = process.env.DB_PASSWORD || "";
const URI = `mongodb+srv://${username}:${password}@learning.4yxzohu.mongodb.net/test`;
export const connectionMongo = async () => {
  try {
    await connect(URI);
    console.log(`Connect With Data Base`);
  } catch (error) {
    console.log(`[NOT Connect With Data Base]: ${error}`);
  }
};
