const Carro = (placa, ano) => ({
    placa,
    ano,
    getData: () => ({placa, ano})
})

const carro = Carro('HEX-0101', 2020)
console.log(carro.getData())