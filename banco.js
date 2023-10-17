var banco = {
    conta: "12345-6",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890-1",
    
    buscarSaldo: function() {
        return "Seu saldo é R$" + this.saldo.toFixed(2);
    },
    
    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return "Depósito de R$" + valor.toFixed(2) + " realizado. Novo saldo: R$" + this.saldo.toFixed(2);
        } else {
            return "Valor de depósito inválido.";
        }
    },
    
    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return "Saque de R$" + valor.toFixed(2) + " realizado. Novo saldo: R$" + this.saldo.toFixed(2);
        } else if (valor > this.saldo) {
            return "Saldo insuficiente para o saque.";
        } else {
            return "Valor de saque inválido.";
        }
    },
    
    numeroDaConta: function() {
        return "Número da conta: " + this.conta;
    }
};

// Exemplo de uso
console.log(banco.buscarSaldo());
console.log(banco.deposito(500));
console.log(banco.saque(300));
console.log(banco.numeroDaConta());
