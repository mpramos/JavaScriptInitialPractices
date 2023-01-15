
class Rectangulo{
    constructor(longitud,ancho){
        this.longitud=longitud
        this.ancho=ancho
    }
    getPerimetro(longitud,ancho){
        return 2*longitud + 2*ancho
    }
}
const rectangulo=new Rectangulo()
console.log(rectangulo.getPerimetro(2,2));