/*
Naam: Nazif Rahiq
Datum: 9-1-2026

File: Random
*/

var buttonElement = document.getElementById("buttonKlikMij");

buttonElement.addEventListener("click",
function()
{
alert("Je hebt op me geklikt!");
});

var stopLichtKleur = "Rood";

if (stopLichtKleur == "Rood")
{
    console.log("Je moet stoppen");
}
else if(stopLichtKleur == "Oranje")
{
    console.log("Je moet oppassen");
}
else if (stopLichtKleur == "Groen")
{
    console.log("Je mag doorrijden!!!!");
}




