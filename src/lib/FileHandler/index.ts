import fs from 'node:fs/promises';
import { IFileHandler } from './IFileHandler';

export class FileHandler implements IFileHandler {

  public async appendWrite(filePath: string, data: string) {
    return fs.appendFile(filePath, data)
  }

  public async readFile(filePath: string): Promise<Buffer> {
    try {
      const data = await fs.readFile(filePath);
      return data;
    } catch(e) {
      return new Buffer("");
    }
  }
}