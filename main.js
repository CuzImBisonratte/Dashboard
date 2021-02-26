const uhr = document.getElementById("uhr");

function ticken() {
    var stunden, minuten, sekunden;
    var StundenZahl, MinutenZahl, SekundenZahl;
    var heute;

    heute = new Date();
    StundenZahl = heute.getHours();
    MinutenZahl = heute.getMinutes();
    SekundenZahl = heute.getSeconds();

    stunden = StundenZahl + ":";
    if (MinutenZahl < 10) {
        minuten = "0" + MinutenZahl + ":";
    } else {
        minuten = MinutenZahl + ":";
    }
    if (SekundenZahl < 10) {
        sekunden = "0" + SekundenZahl + " ";
    } else {
        sekunden = SekundenZahl + " ";
    }
    zeit = stunden + minuten + sekunden + " Uhr";
    document.getElementById("uhrzeit").textContent = zeit;

    window.setTimeout("ticken();", 10);
}
ticken();





mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





async function Coronaabfrage() {
    const Covidresponse = await fetch(
        "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    );
    const Covidresponsejson = await Covidresponse.json();
    const CovidresultSchleHol = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Schleswig-Holstein").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultHamburg = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Hamburg").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultNiedersachsen = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Niedersachsen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultBremen = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Bremen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultNRW = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Nordrhein-Westfalen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultHessen = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Hessen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultRheiPfal = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Rheinland-Pfalz").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultBawue = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Baden-Württemberg").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultBayern = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Bayern").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultSaarland = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Saarland").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultBerlin = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Berlin").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultBrandenburg = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Brandenburg").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultMeckPom = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Mecklenburg-Vorpommern").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultSachsen = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Sachsen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultSachsenAnhalt = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Sachsen-Anhalt").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    const CovidresultThueringen = Covidresponsejson.features.filter((feature) => feature.attributes.Bundesland === "Thüringen").reduce((acc, val) => acc + val.attributes.AnzahlFall, 0);
    document.getElementById("coronalist1").innerHTML = "Schleswig-Holstein: " + CovidresultSchleHol;
    document.getElementById("coronalist2").innerHTML = "Hamburg: " + CovidresultHamburg;
    document.getElementById("coronalist3").innerHTML = "Niedersachsen: " + CovidresultNiedersachsen;
    document.getElementById("coronalist4").innerHTML = "Bremen: " + CovidresultBremen;
    document.getElementById("coronalist5").innerHTML = "NRW: " + CovidresultNRW;
    document.getElementById("coronalist6").innerHTML = "Hessen: " + CovidresultHessen;
    document.getElementById("coronalist7").innerHTML = "Rheinland-Pfalz: " + CovidresultRheiPfal;
    document.getElementById("coronalist8").innerHTML = "Baden-Württemberg: " + CovidresultBawue;
    document.getElementById("coronalist9").innerHTML = "Bayern: " + CovidresultBayern;
    document.getElementById("coronalist10").innerHTML = "Saarland: " + CovidresultSaarland;
    document.getElementById("coronalist11").innerHTML = "Berlin: " + CovidresultBerlin;
    document.getElementById("coronalist12").innerHTML = "Brandenburg: " + CovidresultBrandenburg;
    document.getElementById("coronalist13").innerHTML = "Mecklenburg-Vorpommern: " + CovidresultMeckPom;
    document.getElementById("coronalist14").innerHTML = "Sachsen: " + CovidresultSachsen;
    document.getElementById("coronalist15").innerHTML = "Sachsen-Anhalt: " + CovidresultSachsenAnhalt;
    document.getElementById("coronalist16").innerHTML = "Thüringen: " + CovidresultThueringen;
}
Coronaabfrage();





let DiscordOnline = false;
async function Discordabfrage() {
    const Discordresponse = await fetch("https://srhpyqt94yxb.statuspage.io/api/v2/status.json");
    const Discordresponsejson = await Discordresponse.json();
    if (Discordresponsejson.status.description == "All Systems Operational") {
        DiscordOnline = true;
        document.getElementById("Discord").innerHTML = "Discord hat aktuell keine Störungen!";
    } else {
        DiscordOnline = false;
        document.getElementById("Discord").innerHTML = "Discord hat aktuell Störungen!";
    }
}
Discordabfrage();





// Make the DIV element draggable:
dragElement(document.getElementsByClassName("draggable"));
var draggableleft = 0;
var draggabletop = 10;
var Screenwidth = Screen.width;


function dragElement(elmnts) {
    for (let i = 0; i < elmnts.length; i++) {
        const elmnt = elmnts[i];

        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;

        const header = elmnt.querySelector(".header");
        if (header) {
            header.onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;

            console.log(pos3, pos4);

            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element"s new position:
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }
}






function Datum() {
    Zeit = new Date();
    var wochentag = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    zeitWochentag = Zeit.getDay();
    zeitJahr = Zeit.getFullYear();
    zeitMonat = Zeit.getMonth() + 1;
    zeitTag = Zeit.getDate();
    Wochentag = wochentag[zeitWochentag];
    document.getElementById("Datum2").innerHTML = "Heute ist <br>" + Wochentag + ", der <br>" + zeitTag + "." + zeitMonat + "." + zeitJahr;
}
Datum();





async function getBitcoin() {
    const Bitcoinresponse = await fetch("https://api.binance.com/api/v1/ticker/24hr?symbol=BTCEUR");
    const Bitcoinresponsejson = await Bitcoinresponse.json();
    document.getElementById("Bitcoin").innerHTML = "Aktueller Preis:<br>" + Math.round(Bitcoinresponsejson.lastPrice) + "€";
}
getBitcoin();






function Navifunctions() {
    function getBL() {
        BL = navigator.language;
        document.getElementById("BL").innerHTML = BL;
    }

    function getUA() {
        UA = navigator.userAgent;
        document.getElementById("UA").innerHTML = UA;
    }


    function getOnline() {
        online = window.navigator.onLine;
        if (online === true) {
            document.getElementById("Online").innerHTML = "JA!";
        } else document.getElementById("Online").innerHTML = "NÖÖÖÖ!";
    }

    function getPlatform() {
        platform = navigator.platform;
        document.getElementById("Platform").innerHTML = platform;
    }

    function getCookieEnabled() {
        cookieEnabled = navigator.cookieEnabled;
        if (cookieEnabled === true) {
            document.getElementById("Cookie").innerHTML = "sind AN!";
        } else if (cookieEnabled === false) {
            document.getElementById("Cookie").innerHTML = "sind AUS!";
        } else
            document.getElementById("Cookie").innerHTML = "ERROR";
    }

    function getJavaEnabled() {
        javaEnabled = navigator.javaEnabled();
        if (javaEnabled === true) {
            document.getElementById("Java").innerHTML = "ist AN!";
        } else if (javaEnabled === false) {
            document.getElementById("Java").innerHTML = "ist AUS!";
        } else
            document.getElementById("Java").innerHTML = "ERROR";
    }


    function getLocation() {
        if (locationOn == true) {
            locationOn = false;
            document.getElementById("LocationButton").innerHTML = '<img id="LocationButtonOff" src="OffButton.png" />';
            document.querySelector("#LocationButtonOff").addEventListener("click", getLocation);
            return;
        } else if (locationOn == false) {
            locationOn = true;
            document.getElementById("LocationButton").innerHTML = '<img id="LocationButtonOff" src="OnButton.png" />';
            document.querySelector("#LocationButtonOff").addEventListener("click", getLocation);
        } else {
            console.log("ERROR")
            return;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        }
    }


    async function getWeather(position) {
        document.getElementById("Geolocationbody").innerHTML = "Breitengrad: " + position.coords.latitude + "<br>Längengrad: " + position.coords.longitude;
        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
        const Weatherresponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=8&lon=40&appid=72f36c0ee49b59b1a9d2dcc59f5ec105&lang=de&units=metric"); // + position.coords.latitude + "}&lon={" + position.coords.longitude + "
        const Weatherresponsejson = await Weatherresponse.json();
        document.getElementById("weatherlist1").innerHTML = "Himmel: " + Weatherresponsejson.weather[0].description;
        document.getElementById("weatherlist2").innerHTML = "Temperatur: " + Math.round(Weatherresponsejson.main.temp) + "°C";
        document.getElementById("weatherlist3").innerHTML = "Gefühlte Temperatur: " + Math.round(Weatherresponsejson.main.feels_like) + "°C";
        document.getElementById("weatherlist4").innerHTML = "Minimaltemperatur: " + Math.round(Weatherresponsejson.main.temp_min) + "°C";
        document.getElementById("weatherlist5").innerHTML = "Höchsttemperatur: " + Math.round(Weatherresponsejson.main.temp_max) + "°C";
        document.getElementById("weatherlist6").innerHTML = "Luftfeuchtigkeit: " + Math.round(Weatherresponsejson.main.humidity) + "%";
        document.getElementById("weatherlist7").innerHTML = "Luftdruck: " + Math.round(Weatherresponsejson.main.pressure) + " hPa";
        document.getElementById("weatherlist8").innerHTML = "Luftdruck Meeresspiegel: " + Math.round(Weatherresponsejson.main.sea_level) + " hPa";
        document.getElementById("weatherlist9").innerHTML = "Luftdruck Bodenhöhe: " + Math.round(Weatherresponsejson.main.grnd_level) + " hPa";
        document.getElementById("weatherlist10").innerHTML = "Sichtweite: " + Math.round(Weatherresponsejson.visibility) + " meter";
        document.getElementById("weatherlist11").innerHTML = "Windgeschwindigkeit: " + Math.round(Weatherresponsejson.wind.speed) + " m/s";
        document.getElementById("weatherlist12").innerHTML = "Windrichtung: " + Math.round(Weatherresponsejson.wind.deg) + "°";
        document.getElementById("weatherlist12").innerHTML = "Wolkenbedeckung: " + Math.round(Weatherresponsejson.clouds.all) + "%";
    }
    getBitcoin();
    getBL();
    getUA();
    getOnline();
    getPlatform();
    getCookieEnabled();
    getJavaEnabled();


    let locationOn = false;
    document.querySelector("#LocationButtonOff").addEventListener("click", getLocation);
}
Navifunctions();


async function randomAdvice() {
    const advice = await fetch("https://api.adviceslip.com/advice")
    const advicejson = await advice.json();
    console.log(advicejson);
    document.getElementById("advice").innerHTML = advicejson.slip.advice;
    console.log(advicejson.slip.advice);
}
randomAdvice();