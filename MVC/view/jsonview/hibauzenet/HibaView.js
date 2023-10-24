class HibaView{
    constructor(error, szuloElem){

        this.szuloElem = szuloElem
        this.szuloElem.html(error.message)
    }
}
export default HibaView