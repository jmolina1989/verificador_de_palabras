const palabras = [
    {palabra:"Actividad",audio:"./Audios/Actividad.m4a" },
    {palabra:"Adjetivo",audio:"./Audios/Adjetivo.m4a" },
    {palabra:"Descripción",audio:"./Audios/Descripcion.m4a" },
    {palabra:"Desinfección",audio:"./Audios/Desinfeccion.m4a" },
    {palabra:"Ejercicio",audio:"./Audios/Ejercicio.m4a" },
    {palabra:"Examen",audio:"./Audios/Examen.m4a" },
    {palabra:"Exámenes",audio:"./Audios/Examenes.m4a" },
    {palabra:"Guitarra",audio:"./Audios/Guitarra.m4a" },
    {palabra:"Había",audio:"./Audios/Había.m4a" },
    {palabra:"Hazañas",audio:"./Audios/Hazañas.m4a" },
    {palabra:"Iba",audio:"./Audios/Iba.m4a" },
    {palabra:"Imagen",audio:"./Audios/Imagen.m4a" },
    {palabra:"Oración",audio:"./Audios/Oración.m4a" },
    {palabra:"Resumen",audio:"./Audios/Resumen.m4a" },
    {palabra:"Sustantivo",audio:"./Audios/Sutantivo.m4a" },
];
let salieron = [];
if (localStorage.getItem("salieron") == null){
    let salieron = [];
    localStorage.setItem("salieron",JSON.stringify(salieron));
};
salieron = localStorage.getItem("salieron");
salieron = JSON.parse(salieron);
if (salieron.length == palabras.length){
    salieron = [];
}
let random;
let estado = true;
while (estado){
    random = Math.floor(Math.random()*palabras.length);
    if (!salieron.includes(random)){
        estado = false;
        salieron.push(random);
    }
}

document.getElementById("audio").src = palabras[random].audio;
localStorage.setItem("salieron",JSON.stringify(salieron));

const verificar = () => {
    let input = document.getElementById("input").value;
    if (input == palabras[random].palabra){
        alert("Excelente!!!...")
        location.reload();
    }else {
        alert("Incorrecto, intenta nuevamente")
    }
}