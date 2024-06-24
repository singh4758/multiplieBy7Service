import { IFileHandler } from "../../lib/FileHandler/IFileHandler";
import * as path from 'path';
import { IMultiplierBy7Service } from "./IMultiplierBy7Service";

export class MultiplierBy7Service implements IMultiplierBy7Service {

  private filePath;
  private fileHandler: IFileHandler;

  constructor(fileHandler: IFileHandler, filePath: string) {
    this.filePath = path.join(__dirname, filePath);
    this.fileHandler = fileHandler;    
  }

  public async write(number: number) {
    const isFewFileEmpty = await this.checkAnyFileEmpty();
    if(!isFewFileEmpty) {
      throw 'All files already filled';
    }

    let fileName: string;
    if(number*7 > 140) {
      fileName = 'A.txt';
    } else if (number * 7 > 100) {
      fileName = 'B.txt'
    } else if (number * 7 > 60) {
      fileName = 'C.txt';
    } else {
      fileName = 'D.txt';
    }

    const data = JSON.stringify(number) + " ";

    return this.fileHandler.appendWrite(path.join(this.filePath, fileName), data)
  }

  public async readNumber() {
    const files = ['A.txt', 'B.txt', 'C.txt', 'D.txt']
    const dataS = [];

    for(let file of files) {
      const data = await this.fileHandler.readFile(path.join(this.filePath, file));
      
      const arrayOfNumber = data.toString().split(" ").reduce((numberStorage: Array<number>, numberString) => {
        if(numberString === " " || numberString === "" || Number.isNaN(Number(numberString))) {
          
          return [...numberStorage];
        }
        
        return [...numberStorage, Number(numberString)];
      }, [] as Array<number>);
      
      dataS.push(...arrayOfNumber);
    }

    return dataS;
  }

  private async checkAnyFileEmpty() {
    const files = ['A.txt', 'B.txt', 'C.txt', 'D.txt']
    let isEmpty: boolean = false;

    for(let file of files) {
      const data = await this.fileHandler.readFile(path.join(this.filePath, file));
      
      const arrayOfNumber = data.toString().split(" ").reduce((numberStorage: Array<number>, numberString) => {
        if(numberString === " " || numberString === "" || Number.isNaN(Number(numberString))) {
          
          return [...numberStorage];
        }
        
        return [...numberStorage, Number(numberString)];
      }, [] as Array<number>);
      
      isEmpty = isEmpty || !arrayOfNumber.length
    }

    return isEmpty;
  }
}