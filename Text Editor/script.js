let optionButtons = documment.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll("adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef= document.getElementById("fontSize");
let writingAre = document.getElementById("text-input");
let linkButton = document.getElementById("creatLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButton, false);
    highlighter(scriptButtons, true);

    fontList.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i<= 7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3
}

const modifyText = (command, defaultUi, value) =>{
    document.exeeCommand(command, defaultUi, value);
};

optiionsButtons.forEach((button) =>{
    button.addEventListener("click", ()=> {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) =>{
    button.addEventListener("change", ()=> {
        modifyText(button.id, false, null);
    });
});

linkButton.addEventListener("click", () =>{
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButtons.id, false, userLink);
    } else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});