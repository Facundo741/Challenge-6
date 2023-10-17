let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

document.getElementById("guardarDatos").addEventListener("click",(e) =>{

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const f_Nacimiento = document.getElementById("f_Nacimiento").value;
    const email = document.getElementById("email").value;
    const genero = document.getElementById("genero").value;
    const foto = document.getElementById("foto").value;

    const usuario = {
        nombre,
        apellido,
        f_Nacimiento,
        email,
        genero,
        foto,
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

});

function mostrar() {
    const cards = document.getElementById("cards");
    cards.innerHTML = '';

    usuarios.map((usuario, i) => {
        const card = document.createElement("div");

        card.className = "user-card";

        card.innerHTML = `
        <div class="card mt-5 w-50">
        <div class="card-body">
        <h5 class="card-title">${usuario.nombre} ${usuario.apellido}</h5>
        <p class="card-text">Fecha de Nacimiento: ${usuario.f_Nacimiento}</p>
        <p class="card-text">Email: ${usuario.email}</p>
        <p class="card-text">Género: ${usuario.genero}</p>
        </div>
        <img src="${usuario.foto}" class="card-img-top" alt="Foto de perfil">
        </div>`;
        cards.appendChild(card);
    });
}
mostrar();