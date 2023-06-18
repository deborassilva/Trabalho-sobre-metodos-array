const usuarios = [
    {id: 1, nome: "João Paulo", idade: 24},
    {id: 2, nome: "Kim Schmitz", idade: 49},
    {id: 3, nome: "Ryan Dahl", idade: 42},
];



usuarios.forEach ((usuarios) => {
    let {id , nome, idade}  = usuarios;
    console.log (`${id} - O usuario: ${nome} tem a idade de ${idade} anos.`);
})
