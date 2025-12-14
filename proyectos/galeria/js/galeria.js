const menuSticky = document.getElementById("menu");
        window.addEventListener("scroll", () => {
            menuSticky.classList.toggle("scrolled", window.pageYOffset > 13);
        });


        const imagenes = document.querySelectorAll('.ajustarImg');
        const contenedor = document.getElementById('contenedor-principal');
        const imagenActiva = document.getElementById('imagen-activa');
        const btnCerrar = document.getElementById('btn-cerrar');
        const btnSiguiente = document.getElementById('btn-siguiente');
        const btnRetroceder = document.getElementById('btn-retroceder');

        let indiceActual = 0;

        imagenes.forEach((img, index) => {
            img.addEventListener('click', () => {
                indiceActual = index;
                mostrarImagen();
                imagenActiva.style.opacity = 1;
                contenedor.style.display = 'flex';
            });
        });

        function mostrarImagen() {
            imagenActiva.src = imagenes[indiceActual].src;
        }

        btnSiguiente.addEventListener('click', () => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            mostrarImagen();
        });

        btnRetroceder.addEventListener('click', () => {
            indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
            mostrarImagen();
        });

        btnCerrar.addEventListener('click', () => {
            imagenActiva.style.opacity = 0;
            contenedor.style.display = 'none';
        });


        /*ACCORDION NOTICIAS*/
        console.log("script cargado");


