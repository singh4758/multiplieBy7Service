export interface IFileHandler {
  appendWrite(filePath: string, data: string): Promise<void>;

  readFile(filePath: string): Promise<Buffer>
}