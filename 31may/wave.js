// function breakText(){
//     //both console same op
//     var h1 = document.querySelector("h1");
//     console.log(h1.innerHTML);
//     var h1text = h1.textContent;
//     console.log(h1text);

//     var splittedText = h1text.split("");
//     console.log(splittedText);

//     var clutter = "";
//     splittedText.forEach(function (letter, index) {
//         console.log(letter, index);
//         clutter += `<span>${letter}</span>`;
//     });
//     console.log(clutter);
//     h1.innerHTML = clutter;
// }
// //<h1>Hello</h1>

// breakText();
// {/* <h1>
//   <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
// </h1> */}

// gsap.from("h1 span", {
//     duration: 1,
//     opacity: 0,
//     y: 50,
//     delay: 0.5,
//     stagger:0.15
// });

function breakText(){
    //both console same op
    var h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    var h1text = h1.textContent;
    console.log(h1text);

    var splittedText = h1text.split("");
    console.log(splittedText);

    var clutter = "";
    splittedText.forEach(function (letter, index) {
        console.log(letter, index);
        clutter += `<span class="a">${letter}</span>`;
    });
    console.log(clutter);
    h1.innerHTML = clutter;
}
//<h1>Hello</h1>

breakText();
{/* <h1>
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1> */}

gsap.from("h1 span", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    stagger:0.15
});