let file;

document.getElementById("file-input").addEventListener("change", event => {
    console.log(event.target.files) // objeto de tipo file-list[posicion 0 donde esta mi imagen]
    file = event.target.files[0] // data de la imagen

    //puedo extraer el archiovo desde mi files como un indice dentro de los archivos que tiene guardados 

    console.log(file)  // seteo el file desde mi archivo

    var reader = new FileReader() // abro una nueva instancia de fileReader para leer el archivo file
    reader.onload = function(event) {// reader tiene un listener (onload), cuando se ejecuta mi reader yo puedo ejecutar un callback basado en el evento (onload) del reader

        document.getElementById("img-preview").src = event.target.result //cuando este Reader se carge voy a tomar mi elemento .getElementById("img-preview") y le voy a modificar el src, el src va a ser el evento, y del evento tomara el target y va a tomar el resurl

//una imagen es un arreglo de bits
//reader toma el codigo de base 64 y lo combierte de nuevo en imagen, por eso mi tag img("img-preview") puede tomar esa url como si fuera la imagen

        console.log(event.target.result)
    }

    reader.readAsDataURL(file) // Ejecutamos el reader de nuestro archivo

})

/* 
Puedo usar este FileReader() para crear una imagen previa de mi archivo e incluso puedo usarla como para guardarla en mi base de datos

var reader = new FileReader()
reader.onload = function(event) {
    document.getElementById("img-preview").src = event.target.result //cuando este Reader se carge voy a tomar mi elemento .getElementById("img-preview") y le voy a modificar el src, el src va a ser el evento, y del evento tomara el target y va a tomar el resurl
console.log(event.target.result)
}
reader.readAsDataURL(file) */
