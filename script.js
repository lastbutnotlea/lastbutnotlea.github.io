const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
document.getElementById("name").innerHTML = name;