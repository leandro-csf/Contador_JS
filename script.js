function contar() {

    var inicio = window.document.querySelector(`input#inicio`)
    var fim = window.document.querySelector(`input#fim`)
    var passo = window.document.querySelector(`input#passo`)
    var res = window.document.getElementById(`resultado`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`Erro - Faltam dados`)
    } else {
        res.innerHTML = `Contando: `
        var inicioAux = Number(inicio.value)
        var fimAux = Number(fim.value)
        var passoAux = Number(passo.value)
        if (passoAux == 0) {
            window.alert(`Passo invalido`)
            passoAux = 1
        }

        if (inicioAux < fimAux) {

            for (var contando = inicioAux; contando <= fimAux; contando += passoAux)
            {
                res.innerHTML += ` ${contando} `
            }

        } else {
            for (var contando = inicioAux; contando >= fimAux; contando -= passoAux ) {
                res.innerHTML += ` ${contando} `
            }

        }
    }


}

