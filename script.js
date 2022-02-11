function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  var valorReal = 5 * valorDolar;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido em real: R$ " + valorReal;

  elementoValorConvertido.innerHTML = valorConvertido;
}