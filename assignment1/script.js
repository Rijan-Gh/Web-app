document.body.style.margin = "0";
document.body.style.display = "grid";
document.body.style.gridTemplateColumns = "1fr 1fr";
document.body.style.gridTemplateColumns = "1fr 1fr";
document.body.style.height = "100vh";

const cursors = [
  { type: "pointer", color: "lightblue", label: "Pointer Cursor" },
  { type: "text", color: "lightpink", label: "Text Cursor" },
  { type: "copy", color: "lightyellow", label: "Copy Cursor" },
  { type: "alias", color: "lightgreen", label: "Alias Cursor" }
];

cursors.forEach(({ type, color, label }) => {
    const div = document.createElement("div");
    div.className = "container";

    const text = document.createElement("span");
    div.appendChild(text);

    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = "white";
    text.style.opacity = "0";
    text.style.transform = "translateY(10px)";
    text.style.fontSize = "24px";

    div.style.transition = "background-color 1s ease, border 0.3s ease";
    text.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    div.addEventListener("mouseover", function(){
        div.style.cursor = type;
        div.style.backgroundColor = color;
        text.textContent = label;
        div.style.border = "5px solid black";
        text.style.opacity = "1";
        text.style.transform = "translateY(0px)";
    });
    
    div.addEventListener("mouseout", function(){
        div.style.backgroundColor = "white";
        div.style.border = "none";
        text.style.opacity = "0";
        text.style.transform = "translateY(40px)";
    });

    document.body.appendChild(div);
});







// for(let i=1; i<=4; i++){
//     let element_div = document.createElement("div");
//     element_div.className = "container";
//     document.querySelector("body").appendChild(element_div);
//     element_div.style.border = "none";
    
//     element_div.style.justifyContent = "center";
//     element_div.style.alignItems = "center";
//     element_div.style.display = "flex";
//     element_div.style.fontSize = "24px";
//     element_div.style.transition = "background-color 1s ease, border 0.3s ease";

//     if(i == 1){
//         element_div.addEventListener("mouseover", function () {
//             element_div.style.cursor = "pointer";
//             element_div.style.backgroundColor = "lightblue";
//             element_div.textContent = "Pointer Cursor ";
//             element_div.style.border = "5px solid black";
//           });
          
//           element_div.addEventListener("mouseout", function () {
//             element_div.style.backgroundColor = "white";
//             element_div.textContent = "";
//             element_div.style.border = "none";
        
//           });
//     }

//     if(i == 2){
//         element_div.addEventListener("mouseover", function () {
//             element_div.style.cursor = "text";
//             element_div.style.backgroundColor = "lightpink";
//             element_div.textContent = "Text Cursor ";
//             element_div.style.border = "5px solid black";
//           });
          
//           element_div.addEventListener("mouseout", function () {
//             element_div.style.backgroundColor = "white";
//             element_div.textContent = "";
//             element_div.style.border = "none";
//           });
//     }

//     if(i == 3){
//         element_div.addEventListener("mouseover", function () {
//             element_div.style.cursor = "copy";
//             element_div.style.backgroundColor = "lightyellow";
//             element_div.textContent = "Copy Cursor ";
//             element_div.style.border = "5px solid black";
//         });
        
//         element_div.addEventListener("mouseout", function () {
//             element_div.style.backgroundColor = "white";
//             element_div.textContent = "";
//             element_div.style.border = "none";
//         });
//     }
    
//     if(i == 4){
//         element_div.addEventListener("mouseover", function () {
//             element_div.style.cursor = "alias";
//             element_div.style.backgroundColor = "lightgreen";
//             element_div.textContent = "Alias Cursor ";
//             element_div.style.border = "5px solid black";
//           });
          
//           element_div.addEventListener("mouseout", function () {
//             element_div.style.backgroundColor = "white";
//             element_div.textContent = "";
//             element_div.style.border = "none";
//           });
//     }

// }
