#class base veiculo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f'Modelo: {self.modelo}')

#subclasse de veiculo
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Navio(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

#fabrica abstrata de veiculos
class FabricaVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError ("o metodo deve ser implementado pela subclasse")

#fabrica concreta de carro
class FabricaCarro (FabricaVeiculo):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

# fabrica concreta de motos
class FabricaMoto(FabricaVeiculo):
    def criarVeiculo(self, modelo):
        return Moto (modelo)

#fabrica concreta de navios
class FabricaNavio(FabricaVeiculo):
    def criarVeiculo(self, modelo):
        return Navio (modelo)

#uso padrao..........
fabricaMoto = FabricaMoto()
fabricaCarro = FabricaCarro()
fabricaNavio = FabricaNavio()

transporte1 = fabricaCarro.criarVeiculo('sedan') 
transporte2 = fabricaCarro.criarVeiculo('rete')
transporte3 = fabricaMoto.criarVeiculo('bigtrail')
transporte4 = fabricaMoto.criarVeiculo('esportiva')
transporte5 = fabricaNavio.criarVeiculo('cargueiro')
transporte6 = fabricaNavio.criarVeiculo('container')
 

transporte1.mostrarDetalhes()
transporte2.mostrarDetalhes()
transporte3.mostrarDetalhes()
transporte4.mostrarDetalhes()
transporte5.mostrarDetalhes()
transporte6.mostrarDetalhes()