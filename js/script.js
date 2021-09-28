const cep = document.querySelector("#cep");

const mostrarDados = (result) => {
    for(const campo in result) {
      //preenche os campos:
        if(document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

//pegar o evento que  o usuário está digitando
cep.addEventListener("blur", (e) => {
    let pesquisa = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, options)
        .then(response => {
            console.log(response.json())
            .then (dado => mostrarDados(dado))
        })
        .catch(e => console.log('Deu erro: ' + e, message))
})