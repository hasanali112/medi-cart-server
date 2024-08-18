import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.database_url as string);
  try {
    app.listen(config.port, () => {
      console.log(
        `Medi cart server listening on https://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
