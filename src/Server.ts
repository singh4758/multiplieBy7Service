import * as bodyParser from 'body-parser';
import express, { Express} from 'express';

import router from './router'; 

import type { IConfig } from './config/configuration';

export class Server {

  private server: Express;
  private config: IConfig;

  constructor(config: IConfig) {
    this.server = express()
    this.config = config;
  }

  private setupRoute() {
    this.server.use(router);
  }

  private initJsonParser() {
    this.server.use(bodyParser.json());
  }

  public bootstrap() {
    this.initJsonParser();
    this.setupRoute();
  }

  public run() {
    const { port } = this.config;
    this.server.listen(port, () => {
      const message = `|| App is running at port '${port}' ||`;
      console.info(message);
    });
  }
}