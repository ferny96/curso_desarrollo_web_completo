//Métodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log('Reproduciendo canción');
    }, pausar: function () {
        console.log('Pausando...');
    }, crearPlaylist: function(nombre){
        console.log(`Creando la playList: ${nombre}`);
    }, reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playList: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción ${id}`)
}

reproductor.reproducir();
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Rock');