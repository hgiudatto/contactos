
document.addEventListener("submit", () => {
    alert("Su nombre de usuario es: "+document.getElementById("username").value+'\n'+
          "Su email ha quedado registrado como: "+document.getElementById("email").value+'\n'+
          "Su comentario es: "+document.getElementById("descripcion").value);
})
