type Pprops ={
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: Pprops = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Props = {
    nome: string,
    contaBancaria: Pprops,
    // contatos: [string,string]
    contatos:string[]
}
let correntista: Props = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)

