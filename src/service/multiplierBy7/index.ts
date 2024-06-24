import { MultiplierBy7Service } from './MultiplyBy7Service';
import { IMultiplierBy7Service } from './IMultiplierBy7Service';
import { FileHandler } from '../../lib/FileHandler';

const fileDirectory =  '../../files'

const multiplierBy7Service = new MultiplierBy7Service(new FileHandler(), fileDirectory);

export default multiplierBy7Service;
export { IMultiplierBy7Service };