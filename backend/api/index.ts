import app from "../src/app";
import { connectToDatabase } from "../src/db/connection";

connectToDatabase();

export default app;
