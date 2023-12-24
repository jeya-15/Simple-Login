function validateForm() {
  let x = document.getElementById("uname").value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}