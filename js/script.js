function populateInput() {
    let x = document.querySelector("main ul li a").innerHTML;
    document.querySelector("input").value = x;
}
function displayProducts() {
    document.getElementById("id-1").style.display = "block";
}