import app from "../src/app.js";
import { connectToDatabase } from "../src/db/connection.js";

await connectToDatabase();

export default app;
