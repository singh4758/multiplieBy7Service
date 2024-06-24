import { Request, Response } from 'express';

import multiplierBy7Service, { IMultiplierBy7Service } from "../../service/multiplierBy7";

export class MultiplierBy7Controller {

  private multiplierBy7Service: IMultiplierBy7Service;

  constructor(multiplierBy7Service: IMultiplierBy7Service) {
    this.multiplierBy7Service = multiplierBy7Service;
  }
  public async write(req: Request, res:Response) {
    try {
      const { number } = req.body;
    
      await multiplierBy7Service.write(number);
      res.json({ message : 'write successfully' })
  
      res.send();
    } catch(e) {
      if(e === 'All files already filled') {
        res.status(406).json({ message: "All files already filled" })
        res.send();
      } else {
        res.status(500).json({ message: "Internal server error" })
        res.send();
      }
    }
  }

  public async read(req: Request, res:Response) {
    
    const dataS = await multiplierBy7Service.readNumber();
    
    res.json({ dataS });

    res.send();

  }
}