// Account Form

const accountModal = document.getElementById("account-modal");
const createNew = document.getElementById("new-account");

// Get the <span> element that closes the modal
const closeAccountModal = document.getElementsByClassName("close")[0];

createNew.onclick = () => {
  accountModal.style.display = "block";
}

closeAccountModal.onclick = () => {
  accountModal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == accountModal) {
    accountModal.style.display = "none";
  }
}