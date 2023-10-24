import MegjelenitSor from "./MegjelenitSor.js";


class TablaMegjelenit {
  #list = [];
  #toroltSorok = [];

  constructor(list, szuloElem) {
    this.#list = list;
    
    
    szuloElem.append(`<table class="table table-bordered table-striped">`);
    this.tablaElem = szuloElem.children("table");
    this.tablazatbaIr();
  }
  isSorTorolve(sor) {
    return this.#toroltSorok.some((toroltSor) => toroltSor.id === sor.id);
}

tablazatbaIr() {
  let txt = "";
  this.#list.forEach((elem) => {
    const isToroltSor = this.#toroltSorok.some((toroltSor) => toroltSor.id === elem.id);

    if (!isToroltSor) {
      const megjelenitSor = new MegjelenitSor(elem, this.tablaElem);

    }
  });
}


 
}

export default TablaMegjelenit;