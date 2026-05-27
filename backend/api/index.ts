import app from "../src/app.js";
import { connectToDatabase } from "../src/db/connection.js";

connectToDatabase();

export default app;
