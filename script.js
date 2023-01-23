

// Div para cambiarles el background-color
const nombre = document.getElementById("sobremi");
const experiencia = document.getElementById("experiencia");
const estudios = document.getElementById("estudios");
const habilidades = document.getElementById("habilidades");
const tecnologias = document.getElementById("tecnologias");
const contacto = document.getElementById("contacto");
const footer = document.getElementById("footer");
const creadapor = document.getElementById("creadapor");
const container = document.getElementById("inicio");
const titulo = document.getElementById("titulo");
const info = document.querySelectorAll("#info");
// Botón de modo oscuro
const boton = document.getElementById("color-1");


// Al apretar el botón se cambia las clases por una con background-color oscuro
boton.addEventListener("click", function(){

    // Si tiene la clase de modo claro, se reempleza por la de modo oscuro
    if(nombre.classList.contains('nombre')){

        nombre.classList.replace("nombre", "nombre-dark")
        experiencia.classList.replace("experiencia", "experiencia-dark")
        estudios.classList.replace("estudios", "estudios-dark")
        habilidades.classList.replace("soft-skills", "soft-skills-dark")
        tecnologias.classList.replace("tecnologias", "tecnologias-dark")
        contacto.classList.replace("contacto", "contacto-dark")
        footer.classList.replace("footer", "footer-dark")
        creadapor.classList.replace("creadapor", "creadapor-dark")
        container.classList.replace("container", "container-dark")
        
    // Si tiene la clase de modo oscuro, reemplaza por la de modo claro
    }else if(nombre.classList.contains("nombre-dark")){

        nombre.classList.replace("nombre-dark", "nombre")
        experiencia.classList.replace("experiencia-dark", "experiencia")
        estudios.classList.replace("estudios-dark", "estudios")
        habilidades.classList.replace("soft-skills-dark", "soft-skills")
        tecnologias.classList.replace("tecnologias-dark", "tecnologias")
        contacto.classList.replace("contacto-dark", "contacto")
        footer.classList.replace("footer-dark", "footer")
        creadapor.classList.replace("creadapor-dark", "creadapor")
        container.classList.replace("container-dark", "container")

    }
})

