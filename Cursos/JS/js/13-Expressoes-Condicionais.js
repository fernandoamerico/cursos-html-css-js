//Expressões condicionais:
//if .. else


//Exemplo: Se a hora estiver entre 5h e 12h = Bom dia!
//Se ela estiver entre 12h01 e 18h = Boa tarde!
//Caso contrário = Boa noite!

let hora = 18;

if ( hora >= 05 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
}
else {
    console.log('Boa Noite!');
};


//Switch ... case
//O switch ... case é usado para comparar variáveis e executar comandos de acordo com os resultados obtidos. Por exemplo, você está em uma empresa e precisa comparar usuários de diferentes níveis e enviar uma mensagem diferente para cada um dos usuários, nese caso você faria assim:



let a = 'gerente';

let tipoUsuario = a;

switch (tipoUsuario) {
    case "colaborador":
        console.log('Bem Vindo Colaborador');
    break;
    case 'gerente':
        console.log('Bem Vindo Gerente');
    break;
    case 'diretor':
        console.log('Bem Vindo Diretor');
    break;

    default:
        console.log('Usuário não identificado');
};



