const places = ["Delhi","Agra","Rishikesh"];
let index = 0;

function showPlace(){
    const span = document.getElementById("place-name");
    span.textContent = places[index];
    index = (index+1)%places.length;
}
showPlace();
setInterval(showPlace,2000);

