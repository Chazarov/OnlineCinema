document.querySelector("#dark_theme_button1").onclick = setDarkTheme;
document.querySelector("#dark_theme_button2").onclick = setDarkTheme;
document.querySelector("#light_theme_button1").onclick = setLightTheme;
document.querySelector("#light_theme_button2").onclick = setLightTheme;


let text_color1L = "rgb(44, 44, 44)"
let text_color2L = "rgb(200, 200, 200)";
let panels_colorL = "rgb(233, 233, 233)";
let background_colorL = "rgb(244, 244, 244)";
let headers_colorL = "rgb(244, 244, 244)";
let border_color1L = "white";
let lines_colorL = "rgb(120, 22, 22)";
let tablet_color1L = "rgba(220, 220, 220, 1)";
let tablet_color2L = "rgba(220, 220, 220, 0.5)";

let text_color1D = "aliceblue"
let text_color2D ="rgb(0, 0, 0)";
let panels_colorD = "rgb(15, 14, 14)";
let background_colorD = "rgb(24, 26, 27)";
let headers_colorD = "rgb(0, 0, 0)";
let border_color1D = "black";
let lines_colorD = "rgb(177, 209, 198)";
let tablet_color1D = "rgba(33, 33, 33, 1)";
let tablet_color2D = "rgba(28, 29, 31, 0.5)";



function setDarkTheme()
{
    let root = document.querySelector("#root");

    let d1 = document.querySelector("#dark_theme_button1");
    let d2 = document.querySelector("#dark_theme_button2");
    let l1 = document.querySelector("#light_theme_button1");
    let l2 = document.querySelector("#light_theme_button2");

    let lightBlock = document.querySelector("#bckb1l");
    let darkBlock = document.querySelector("#bckb1d");

    darkBlock.style.display = "block";
    lightBlock.style.display = "none";

    l1.style.display = "block"; 
    l2.style.display = "block"; 
    d1.style.display = "none"; 
    d2.style.display = "none"; 

    
    root.style.setProperty('--text_color1', text_color1D);
    root.style.setProperty('--text_color2', text_color2D);
    root.style.setProperty('--panels_color', panels_colorD);
    root.style.setProperty('--background_color', background_colorD);
    root.style.setProperty('--headers_color', headers_colorD);
    root.style.setProperty('--border_color1', border_color1D);
    root.style.setProperty('--lines_color', lines_colorD);
    root.style.setProperty('--tablet_color1', tablet_color1D);
    root.style.setProperty('--tablet_color2', tablet_color2D);

}

function setLightTheme()
{
    let d1 = document.querySelector("#dark_theme_button1");
    let d2 = document.querySelector("#dark_theme_button2");
    let l1 = document.querySelector("#light_theme_button1");
    let l2 = document.querySelector("#light_theme_button2");

    let lightBlock = document.querySelector("#bckb1l");
    let darkBlock = document.querySelector("#bckb1d");

    darkBlock.style.display = "none";
    lightBlock.style.display = "block";
    

    l1.style.display = "none"; 
    l2.style.display = "none"; 
    d1.style.display = "block"; 
    d2.style.display = "block"; 

    root.style.setProperty('--text_color1', text_color1L);
    root.style.setProperty('--text_color2', text_color2L);
    root.style.setProperty('--panels_color', panels_colorL);
    root.style.setProperty('--background_color', background_colorL);
    root.style.setProperty('--headers_color', headers_colorL);
    root.style.setProperty('--border_color1', border_color1L);
    root.style.setProperty('--lines_color', lines_colorL);
    root.style.setProperty('--tablet_color1', tablet_color1L);
    root.style.setProperty('--tablet_color2', tablet_color2L);
}