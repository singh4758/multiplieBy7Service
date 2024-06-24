import { config } from "dotenv";

config();

const envVars: NodeJS.ProcessEnv = process.env

export type IConfig = { port: number | undefined }

export default {
  port: envVars.PORT || 8000,
} as IConfig;