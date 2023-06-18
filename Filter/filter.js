const alunos = [
    {id: 1, nome: "João Paulo", periodo: 5},
    {id: 2, nome: "Dener José", periodo: 2},
    {id: 3, nome: "Marcio Costa", periodo: 4},
    {id: 4, nome: "Marcelo Fernando", periodo: 6},
]

//Método Filter

let alunosElegiveis = alunos.filter((alunos) => {
      return alunos.periodo > 4
});

console.log(alunosElegiveis)