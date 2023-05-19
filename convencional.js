class Carro {
    constructor (placa, ano){
        this.placa = placa
        this.ano = ano
    }

    getPlaca(){
        return this.placa
    }

    getAno(){
        return this.ano
    }
}

const carro = new Carro('HEX-0101', 2020)
console.log(carro.getPlaca())
console.log(carro.getAno())