function contar() {
  var res = document.querySelector('div#res')
  var inicio = document.querySelector('input#txtInicio')
  var fim = document.querySelector('input#txtFim')
  var passo = document.querySelector('input#txtPasso')
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contagem <br>'
    var c = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    /*while (c <= f) {
      res.innerHTML += `  \u{1F449}${c}`
      c += p
    }*/
    if (p <= 0) {
      window.alert('Passo inválido, considerando passo 1!')
      passo.value = 1
      p = 1
    }
    if (c < f) {
      for (let i = c; i <= f; i += p) {
        res.innerHTML += `  \u{1F449}${i}`
      }
    } else {
      for (let i = c; i >= f; i -= p) {
        res.innerHTML += ` \u{1F449}${i}`
      }
    }
    res.innerHTML += ' \u{1F3C6}'
  }
}
