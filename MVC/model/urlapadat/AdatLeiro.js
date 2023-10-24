 import { adatleiro } from "./Adat.js";
class AdatModel{
    #leiro
    constructor(){
        this.#leiro = adatleiro;
    }


    get leiro(){
        return this.#leiro
    }
}


export default AdatModel