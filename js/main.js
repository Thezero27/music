/* VALIDAR Y CAPTURAR VALORES INPUT */
const Buscador = document.querySelector('#Buscar');
Buscador.addEventListener('click', e => {
    e.preventDefault();
    const Artista = document.querySelector('#Artista').value;
    const Cancion = document.querySelector('#Cancion').value;
    if (Artista === '' || Cancion === '') {
        document.querySelector('.Error').innerText = 'Campos Vacios';
        setTimeout(function () {
            document.querySelector('.Error').innerText = '';
        }, 1200);

    } else {
        SearchSong(Artista, Cancion);
        document.querySelector('#Title').innerText = `${Cancion}`;
        /* VACIAR FORM */
        document.querySelector('#Artista').value = '';
        document.querySelector('#Cancion').value = '';
    }
});

/* CERRAR MODAL X */
const CerrarModal = document.querySelector('#Cerrar');
CerrarModal.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
});

/* CONSUMIR API */
function SearchSong(Artista, Cancion) {
    let Url = `https://api.lyrics.ovh/v1/${Artista}/${Cancion}`;
    //https://api.lyrics.ovh/v1/ImagineDragons/believer

    fetch(Url)
        .then(res => {
            return res.json();
        })
        .then(datos => {
            if (datos.lyrics === '') {
                alert('Canción no encontrada');
            } else {
                document.querySelector('#Song').innerText = `${datos.lyrics}`;
                document.querySelector('.modal').style.display = 'flex';
            }

        })
        .catch(error => {
            console.log(error);
        });
}