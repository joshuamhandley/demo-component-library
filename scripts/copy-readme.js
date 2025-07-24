import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.resolve(__dirname, "../README.md");
const destinationPath = path.resolve(__dirname, "../dist/README.md");

try {
  fs.copyFileSync(sourcePath, destinationPath);
  console.log("README.md copied to dist/");
} catch (err) {
  console.error("Error copying README.md:", err);
  process.exit(1); // Exit with an error code if copy fails
}
