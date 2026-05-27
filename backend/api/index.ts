import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and listeners

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started & Connected To Database 🤟`);
      console.log(`Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
