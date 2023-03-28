const select = document.getElementById("select");
const labeltxt = document.getElementById("labeltxt")

select.addEventListener("change", () => {

    const choice = select.value;


    switch (choice) {

        case "dark":
            document.body.style.backgroundColor = "black";
            labeltxt.style.color = "white"
            break;

        case "light":
            document.body.style.backgroundColor = "white";
            labeltxt.style.color = "black"
            break;
    }
}





)



