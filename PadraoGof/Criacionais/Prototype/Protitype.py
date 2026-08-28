class Pessoa:
    def __init__(self, id_pessoa, nome, idade):
        self.id = id_pessoa
        self.nome = nome
        self.idade = idade

    # Lógica de clonagem manual idêntica ao JS
    def clone(self):
        return Pessoa(self.id, self.nome, self.idade)

    # Faz o print no Python exibir a estrutura do objeto igual ao console.log do JS
    def __repr__(self):
        return f"Pessoa {{ id: {self.id}, nome: '{self.nome}', idade: {self.idade} }}"


class GerenciaPessoa:
    def __init__(self):
        self.pessoas = {}

    def add_pessoas(self, id_pessoa, nome, idade):
        pessoa = Pessoa(id_pessoa, nome, idade)
        self.pessoas[id_pessoa] = pessoa

    # Busca e retorna o clone se existir
    def get_pessoa_by_id(self, id_pessoa):
        if id_pessoa in self.pessoas:
            pessoa_original = self.pessoas[id_pessoa]
            return pessoa_original.clone()
        else:
            return None

    # Método para podermos ver o objeto original intacto
    def get_pessoa_original_by_id(self, id_pessoa):
        if id_pessoa in self.pessoas:
            return self.pessoas[id_pessoa]
        return None


# criando uma instancia de gerenciar pessoas
gerencia = GerenciaPessoa()

# add pessoa
gerencia.add_pessoas(1, 'joao da sila', 30)
gerencia.add_pessoas(2, 'Joana', 25)
gerencia.add_pessoas(3, 'Kleber bambam', 35)

# clonando a pessoa 
pessoa_clone1 = gerencia.get_pessoa_by_id(1)
pessoa_clone2 = gerencia.get_pessoa_by_id(2)
pessoa_clone3 = gerencia.get_pessoa_by_id(3)

if pessoa_clone1:
    pessoa_clone1.nome = "clonado de oliveira"

if pessoa_clone3:
    pessoa_clone3.nome = "Bruno de oliveira clonado "
    pessoa_clone3.idade = "99"  # Mantido como string exatamente igual ao seu JS original

# imprimindo a pessoa 
print("pessoas originais ")
print(gerencia.get_pessoa_original_by_id(1))
print(gerencia.get_pessoa_original_by_id(2))
print(gerencia.get_pessoa_original_by_id(3))

print("pessoas clonadas")
print(pessoa_clone1)
print(pessoa_clone3)
