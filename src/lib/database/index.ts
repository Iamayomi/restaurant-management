import { Sequelize } from "sequelize";
import { Logger } from "../logger";
import { customEnvs } from "../config";

const sequelize = new Sequelize(customEnvs.postgres_url, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: false,
  },
});

export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    Logger.success("Database connection established successfully");

    await sequelize.sync({ alter: true });
  } catch (error) {
    Logger.error(`Unable to connect to the database:  ${error}`);
    process.exit(1);
  }
}

export default sequelize;
