function searchdestination() {
    let filterDiv = document.getElementsByClassName("filterDiv");
    let input = document.getElementById("userInput").value;

    for (let divElement of filterDiv) {
        txtValue = divElement.textContent;
        
        if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
            divElement.style.display = "block";
        } else {
            divElement.style.display = "none";
        }

    }
}