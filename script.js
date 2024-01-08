
function submitForm() {
  // Recuperar los valores del formulario
  var vehicleType = document.getElementById("vehicleType").value;
  var rentalDays = document.getElementById("rentalDays").value;
  var customerName = document.getElementById("customerName").value;

  // Realizar acciones con los datos (por ejemplo, enviarlos a un servidor)
  console.log("Tipo de Vehículo:", vehicleType);
  console.log("Días de Alquiler:", rentalDays);
  console.log("Nombre del Cliente:", customerName);

  // Puedes agregar aquí la lógica adicional según tus necesidades
}
