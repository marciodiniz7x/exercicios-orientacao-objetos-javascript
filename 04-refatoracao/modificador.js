function fnCapitalizarNovo(colecao, atributo) {

    if (typeof colecao[0] == 'object') {

        var resultado = colecao.map(function (obj) {
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1)

            obj[atributo] = letraInicial + restoTexto;

            return obj;
        });
        console.log(resultado);

    } else {
        
        var resultado = colecao.map(function(str) {
            var letraInicial = str.charAt(0).toUpperCase();
            var restoTexto = str.slice(1);

            return letraInicial + restoTexto;
        });
        console.log(resultado);
        
    }

}

function fnCapitalizar(vetor) {

    var modificado = [];
    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1)
        var resultado = letraInicial + restoTexto;
        modificado[i] = resultado;
    }
    return modificado;

}

function fnOrdenar(vetor) {

    var ordenado = vetor.sort(function (a, b) {
        return a.localeCompare(b,);
    });
    return ordenado;

}

function fnCaixaAlta(vetor) {

    var modificado = [];
    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }
    return modificado;

}

export default {

    capitalizar: fnCapitalizar,
    CapitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta

}