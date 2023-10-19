function calcular(operacao, numero1, numero2){
    try{
        if(isNaN(numero1)||isNaN(numero2)){
            throw new Error("os valores que foram informados estao errados")
        }
        switch(operacao){
            case"+":
                return numero1 + numero2;
            case "-":
                return numero1 - numero2;
            case "*":
                return numero1 * numero2;
            case"/":
                if(numero2 === 0){
                    throw new Error('não é possivel dividir por zero')
                }
                return numero1/numero2;
        }
    }catch(error){
        return "Error:"+ error.message;
    }finally{
        console.log("Operao concluida")
    }
}