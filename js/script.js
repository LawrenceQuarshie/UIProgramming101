function populateInput() {
    let x = document.querySelector("main ul li a").innerHTML;
    document.querySelector("input").value = x;
}

function displayProducts() {
    let y = document.getElementById("ul-id2");

    if(y.style.display == "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function showSearchResults() {
    document.getElementById("ul-id3").style.display = "block";

    let a = document.getElementById("input-id1").value;
    console.log(a);
    // console.log(b)
}

function domEvents(event) {
    let c = event.target;
    console.log(c)

    // if(c != "INPUT") {
    //     document.getElementById("ul-id3").style.display = "none";
    // } else {
    //     document.getElementById("ul-id3").style.display = "block";
    // }
}