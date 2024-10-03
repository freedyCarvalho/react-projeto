
// função construtora
// conseguimos instanciar novos botões
// 
function Botao(){
    this.label = 'Clique aqui';
}

const botao1 = new Botao();
console.log(botao1.label);

const botao2 = new Botao();
console.log(botao2.label);


function Botao2(props){
    this.label = props?.label ?? 'OK';
}

const botao3 = new Botao2({label:"Cancelar"});
console.log(botao3.label);

const botao4 = new Botao2({label:"Salvar"});
console.log(botao4.label);
