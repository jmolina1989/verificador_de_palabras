const palabras = [
    {palabra:"Actividad",audio:"./Audios/Actividad.mp3" },
    {palabra:"Adjetivo",audio:"./Audios/Adjetivo.mp3" },
    {palabra:"Descripción",audio:"./Audios/Descripcion.mp3" },
    {palabra:"Desinfección",audio:"./Audios/Desinfeccion.mp3" },
    {palabra:"Ejercicio",audio:"./Audios/Ejercicio.mp3" },
    {palabra:"Examen",audio:"./Audios/Examen.mp3" },
    {palabra:"Exámenes",audio:"./Audios/Examenes.mp3" },
    {palabra:"Guitarra",audio:"./Audios/Guitarra.mp3" },
    {palabra:"Había",audio:"./Audios/Había.mp3" },
    {palabra:"Hazañas",audio:"./Audios/Hazañas.mp3" },
    {palabra:"Iba",audio:"./Audios/Iba.mp3" },
    {palabra:"Imagen",audio:"./Audios/Imagen.mp3" },
    {palabra:"Oración",audio:"./Audios/Oración.mp3" },
    {palabra:"Resumen",audio:"./Audios/Resumen.mp3" },
    {palabra:"Sustantivo",audio:"./Audios/Sutantivo.mp3" },
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
    input = input.trim();
    if (input == palabras[random].palabra){
        alert("Excelente!!!...")
        location.reload();
    }else {
        alert("Incorrecto, intenta nuevamente")
    }
}