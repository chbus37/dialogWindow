const dialog = document.querySelector("dialog");
const showDialog = document.getElementById("btnShow");
const confirmYes = document.getElementById("btnYes");
const confirmNo = document.getElementById("btnNo");

showDialog.addEventListener("click", () => {
    dialog.showModal();
});

confirmYes.addEventListener("click", () => {
    document.write("Registro Eliminado");
});

confirmNo.addEventListener("click", () => {
    dialog.close();
});

