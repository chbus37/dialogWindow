const dialog = document.querySelector("dialog");
const showDialog = document.getElementById("btnShow");
const closeDialog = document.getElementById("btnClose");

showDialog.addEventListener("click", () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})