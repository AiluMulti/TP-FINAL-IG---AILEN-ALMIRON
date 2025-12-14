 const menuSticky = document.getElementById("menu");
        window.addEventListener("scroll", () => {
            menuSticky.classList.toggle("scrolled", window.pageYOffset > 13);
        });

        

 document.getElementById("registro").addEventListener("submit", function (e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("contrasena").value;

    if (!nombre || !edad || !email || !password) {
        alert("Completá todos los campos");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    alert("Formulario validado correctamente");

	 this.submit();
});
