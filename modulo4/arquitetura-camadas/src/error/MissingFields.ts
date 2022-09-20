import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Está faltando valores",404)
    }
}
