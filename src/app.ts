import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.routes";
import sessionRoutes from "./routes/sessionRoutes.routes";
import matchRoutes from "./routes/matchRoutes.routes";
import poolRoutes from "./routes/poolRoutes.routes";
import betRoutes from "./routes/betRoutes.routes";
import poolMatchesRoutes from "./routes/poolMatchesRoutes.routes";
import poolUsersRoutes from "./routes/poolUsersRoutes.routes";
import resultRoutes from "./routes/resultRoutes.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/matches", matchRoutes);
app.use("/pools", poolRoutes);
app.use("/bets", betRoutes);
app.use("/poolUsers", poolUsersRoutes);
app.use("/poolMatches", poolMatchesRoutes);
app.use("/result", resultRoutes);

app.use(errorMiddleware);

export default app;
