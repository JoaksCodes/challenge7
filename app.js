let llevaAnteojos = confirm("¿Llevas anteojos?");

switch (llevaAnteojos) {
  case true:
    alert("Vieja, esto esta construido bajo un cementerio Indio....ni a palos compro, chao");
    break;
  case false:
    alert("Bueno, no veo que haya nada malo....compro!");
    break;
  default:
    alert("Respuesta inválida.");
    break;
}