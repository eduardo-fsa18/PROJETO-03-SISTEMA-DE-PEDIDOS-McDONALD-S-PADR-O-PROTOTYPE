//classe base de veiculos
class Veiculos{
    constructor (modelo){
        this.modelo = modelo;
    }
    mostrarDetalhe(){
        console.log(`Modelo: ${this.modelo}`);
    }
} 
//subclasse de veiculos 
class Carros extends Veiculos{
    constructor (modelo){
    super (modelo);
    }
}
class Motos extends Veiculos{
    constructor (modelo){
    super (modelo);
    }
}
class Navios extends Veiculos{
    constructor (modelo){
        super (modelo);
    }
}
//fabrica abstrata de veiculos

class FabricaVeiculos{
    criarVeiculo(modelo){
        throw new Error (`o metodo deve ser implementado pela subclasse`)
    }
}
//fabrica concreta de carro 
class FabricaCarros extends FabricaVeiculos{
    criarVeiculo(modelo){
        return new Carros(modelo);
    }
}
//fabrica concreta de motos 
class FabricaMotos extends FabricaVeiculos{
    criarVeiculo(modelo){
        return new Motos (modelo);
    }
}
//fabrica concretas de navio
class FabricaNavios extends FabricaVeiculos{
    criarVeiculo(modelo){
    return new Navios (modelo);
    }
}
// uso padrao.........
const fabricaMotos = new FabricaMotos();
const fabricaCarros = new FabricaCarros();
const fabricaNavio = new FabricaNavios();

const transporte1 = fabricaCarros.criarVeiculo('sedan'); 
const transporte2 = fabricaCarros.criarVeiculo('rete');
const transporte3 = fabricaMotos.criarVeiculo('bigtrail');
const transporte4 = fabricaMotos.criarVeiculo('esportiva');
const transporte5 = fabricaNavio.criarVeiculo('cargueiro');
const transporte6 = fabricaNavio.criarVeiculo('container');
 
transporte1.mostrarDetalhe();
transporte2.mostrarDetalhe();
transporte3.mostrarDetalhe();
transporte4.mostrarDetalhe();
transporte5.mostrarDetalhe();
transporte6.mostrarDetalhe();
