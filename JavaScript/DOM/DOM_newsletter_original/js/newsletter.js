const txtEmail = document.getElementById("txtEmail");
function cadastrarEmail(){
    // console.log(txtEmail.textContent) //não serve para pegar o valor do input
    console.log(txtEmail.value); //pega o valor do input

}

function editarEmail(){
    txtEmail.disabled = false; //habilita o campo de input
    
}