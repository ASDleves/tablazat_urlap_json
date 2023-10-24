import AdatView from "../view/jsonview/JSONView.js"
import DataService from "../model/jsonadat/DataService.js"
import HibaView from "../view/jsonview/hibauzenet/HibaView.js"
import Megjelenit from "../view/Tablazatview/Tablamegj.js";
import AdatModel from "../model/urlapadat/AdatLeiro.js";
import UrlapView from "../view/Urlapview/UrlapView.js";
import TablaMegjelenit from "../view/Tablazatview/Tablamegj.js";
class AdatController{
    constructor(){
        const szuloElem = $(".tarolo");
        this.urlapModel = new AdatModel();
        this.DataService = new DataService()
        this.urlapView = new UrlapView($(".urlap"), this.urlapModel.leiro);
        this.DataService.getData("../adat.json", this.adatokMegj, this.hibamegj)


         $(window).on("torles", (event) => {
        megjelenito.storeDeletedSor(toroltSor);
        console.log(ToroltSorok)
    });



        
        this.submitElem = $("#submit")
        this.submitElem.on("click", (event) => {
            event.preventDefault()
            let urlapelemLista = this.urlapView.getUrlapElemList();
            let urlapadat = this.urlapView.getUrlapadatok();
            let isFormValid = true; 
            urlapelemLista.forEach((elem) => {
                isFormValid = isFormValid && elem.getvalid();

                
            });
            if (isFormValid) {
                console.log("valid az űrlap!")
                urlapelemLista.forEach((elem) => {
                    let ertek = elem.ertek
                    let kulcs = elem.key
                    urlapadat[kulcs] = ertek
                })
            } else {
                console.log("Nem valid az űrlap!")
            }
            console.log(urlapadat)
        })
    }

    adatokMegj(lista){
        new TablaMegjelenit(lista.KUTYALIST, $(".lista"))
        
    }
    hibamegj(error){
        new HibaView(error, $(".lista"))
    }
}

export default AdatController