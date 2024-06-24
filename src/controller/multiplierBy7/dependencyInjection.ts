import { MultiplierBy7Controller } from "./MultiplierBy7Controller";
import multiplierBy7Service from "../../service/multiplierBy7";

const multiplierBy7Controller = new MultiplierBy7Controller(multiplierBy7Service);

export default multiplierBy7Controller;