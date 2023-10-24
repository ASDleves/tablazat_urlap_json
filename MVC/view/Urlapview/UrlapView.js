import NumberUrlapElem from "./Number/NumberUrlapElem.js";
import RadioUrlapElem from "./Radio/RadioUrlap.js";
import SelectUrlapElem from "./Select/SelectUrlap.js";
import TextUrlapElem from "./Text/TextUrlapElem.js";

class UrlapView {
    #leiro = {};
    #urlapElemList = []
    #valid = true
    #urlapAdatok = {}
    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;
        this.szuloElem.append("<form>")
        this.formelem = this.szuloElem.children("form")
        this.#urlapLetrehoz()

    }
    getUrlapElemList() {
        return this.#urlapElemList;
    }
    getUrlapadatok() {
        return this.#urlapAdatok
    }
    getvalid() {
        return this.#valid
    }

    #urlapLetrehoz() {
        let txt = ""
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    this.#urlapElemList.push(new TextUrlapElem(key, this.#leiro[key], this.formelem))
                    break;
                case "number":
                    this.#urlapElemList.push(new NumberUrlapElem(key, this.#leiro[key], this.formelem))
                    break;
                case "select":
                    this.#urlapElemList.push(new SelectUrlapElem(key, this.#leiro[key], this.formelem))
                    break;
                case "radio":
                    this.#urlapElemList.push(new RadioUrlapElem(key, this.#leiro[key], this.formelem))
                    break;
                default:

            }

        }
        txt += "<input type='submit' id='submit' value='ok'>"
        this.formelem.append(txt)
        
    }
    
    


}

export default UrlapView