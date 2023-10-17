/**
 * Objeto Material: Carro

Atributos:

marca - a marca do carro (por exemplo, "Toyota" ou "Ford").
modelo - o modelo específico do carro (por exemplo, "Camry" ou "F-150").
ano - o ano de fabricação do carro (por exemplo, 2022).
Métodos:

ligar() - liga o motor do carro.
desligar() - desliga o motor do carro.
acelerar(velocidade) - acelera o carro para a velocidade especificada.
 * 
 */
const carro = {
    marca: "Toyota",
    modelo: "Camry",
    ano: 2022,
    
    ligar: function() {
        console.log("O motor está ligado.");
    },
    
    desligar: function() {
        console.log("O motor está desligado.");
    },
    
    acelerar: function(velocidade) {
        console.log(`Acelerando para ${velocidade} km/h.`);
    }
};

/**
 * Objeto Abstrato: Conta Bancária

Atributos:

titular - o nome do titular da conta.
saldo - o saldo atual na conta.
numeroConta - o número da conta bancária.
Métodos:

depositar(valor) - adiciona dinheiro à conta.
sacar(valor) - retira dinheiro da conta.
obterSaldo() - retorna o saldo atual da conta.
 */
const contaBancaria = {
    titular: "João da Silva",
    saldo: 5000,
    numeroConta: "12345-6",
    
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    },
    
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    },
    
    obterSaldo: function() {
        return `Saldo atual: R$${this.saldo.toFixed(2)}`;
    }
};
