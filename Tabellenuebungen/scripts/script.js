//variables----------------------------------------------
var colorSwitch = 0;
var lastrandom = 0;
var rColor ='#FFFFFF';
var palette = 0;
const colors0 = ["#B9E3C6",
                "#59C9A5",
                "#D81E5B",
                "#23395B",
                "#FFFD98"
               ];
const colors1 = ["#61A0AF",
                "#96C9DC",
                "#F06C9B",
                "#F9B9B7",
                "#F5D491"
               ];
const colors2 = ["#DB2B39",
                "#29335C",
                "#F3A712",
                "#F0CEA0",
                "#534D41"
               ];

//reset colors to default--------------------------------
function colorreset(){
    var r = document.querySelector(':root');
    
    r.style.setProperty('--color1','#FFFFFF');
    r.style.setProperty('--color2','#FFFFFF');
    r.style.setProperty('--color3','#E9D749');
    r.style.setProperty('--color4','#FFFFFF');
    r.style.setProperty('--color5','#FFFFFF');
    r.style.setProperty('--color6','#FB0C0D');
    r.style.setProperty('--color7','#E9D749');
    r.style.setProperty('--color8','#FFFFFF');
    r.style.setProperty('--color9','#FFFFFF');
    r.style.setProperty('--color10','#FFFFFF');
    r.style.setProperty('--color11','#FFFFFF');
    r.style.setProperty('--color12','#000000');
    r.style.setProperty('--color13','#FFFFFF');
    r.style.setProperty('--color14','#FFFFFF');
    r.style.setProperty('--color15','#E9D749');
    r.style.setProperty('--color16','#FFFFFF');
    r.style.setProperty('--color17','#1D2469');
    r.style.setProperty('--color18','#E4573B');
    r.style.setProperty('--color19','#FFFFFF');
    r.style.setProperty('--color20','#000000');
    r.style.setProperty('--color21','#FFFFFF');
}

//generate a random number--------------------------------
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate a random color---------------------------------
function randomColor(){
    var r = document.querySelector(':root');
    var i = randomNumber(0, 4);
    
    if(palette == 0){
        rColor = colors0[i];
    }else if(palette == 1){
        rColor = colors1[i];
    }else{
        rColor = colors2[i];
    }
    //change --randomcolor variable-----------------------
    r.style.setProperty('--randomcolor', rColor);
}

//on/off color change-------------------------------------
function toggelColor(){
    var r = document.querySelector(':root');
    if(colorSwitch == 0){
        colorSwitch = 1;
        palette = randomNumber(0, 2);
    }else{
        colorSwitch = 0;
    }
    for(var i = 1; i <= 21; i++){
        r.style.setProperty('--color'+i, '#FFFFFF');
    }
    setTimeout(checkToggel, 1000);
}

//loop color change while toggel is on-------------------
function checkToggel(){
    if(colorSwitch == 0){
        setTimeout(colorreset, 500);
    }else{
        rainbow();
        setTimeout(checkToggel, 600);
    }
}

//select random --color and change colorvalue-----------
function rainbow(){
    var r = document.querySelector(':root');
    var i = randomNumber(1, 21);
    while(i == lastrandom){
        i = randomNumber(1, 21);
    }
    var color = '--color'+i;
    randomColor();
    r.style.setProperty(color, rColor);
    lastrandom = i;
}