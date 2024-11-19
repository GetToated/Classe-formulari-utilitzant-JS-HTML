class Persona {
    constructor(nombre, DNI, edad) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.edad = edad;
    }
}
document.getElementById('persona').addEventListener('submit', function (event) {

    const nombre = document.getElementById('nombre').value;
    const DNI = document.getElementById('DNI').value;
    const edad = document.getElementById('edad').value;

    const persona = new Persona(nombre, DNI, edad);

    debugger;
    const url = new URL('formulari.php', window.location.href);
    url.searchParams.append('nombre', persona.nombre);
    url.searchParams.append('DNI', persona.DNI);
    url.searchParams.append('edad', persona.edad);

    window.location.href = url;
});