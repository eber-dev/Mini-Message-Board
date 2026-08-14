const abrir_modal = document.querySelector('.añadir_nuevo');
const modal = document.getElementById('modal');
const cerrar_modal = document.getElementById('cerrar_modal');

abrir_modal.addEventListener('click', () => {
    modal.showModal();
});

cerrar_modal.addEventListener('click', () => {
    modal.close();
});
