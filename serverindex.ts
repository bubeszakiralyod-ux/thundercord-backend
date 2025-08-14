import express from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";

const app = express();
app.use(express.json());

async function startServer() {
  const server = await registerRoutes(app);
  await setupVite(app, server);
  
  const port = process.env.PORT || 5000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`ThunderCord server running on port ${port}`);
  });
}

startServer().catch(console.error);