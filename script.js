//Mind ötös gomb beírja az összes érdemjegyhez az ötöst.
function mindOtos() {
    var x = document.querySelectorAll(".erdemJegy");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].value = 5;
    }
}

//Mind négyes gomb beírja az összes érdemjegyhez a négyest.
function mindNegyes() {
    var x = document.querySelectorAll(".erdemJegy");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].value = 4;
    }
}

//A jegyek beírásakor validál
function erdemJegy(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 49 || iKeyCode > 53))
        return false;

    return true;
}

//Érettségi százalékoknál az input mezőket validálja beíráskor
function validnum(a) {
    return ((a >= 0) && (a <= 100));
}

//Megjeleníti az érettségi tárgy nevét és eredményét 
function displayErettsegiTargy(elemID, Szoveg, sSz, pont) {
    var Kell = document.getElementById(elemID);
    var elemRef = document.getElementById(sSz + "ErettsegiEmelt");
    if (Kell.checked == true) {
        elemRef.innerHTML = Szoveg;
        document.getElementById(sSz + "ErettsegiEmeltSzazalek").innerHTML = pont + " pont";
        elemRef.style.display = "block";
    } else {
        elemRef.style.display = "none";
    }
    return (Kell);
}

//Hibajelzés: túl sok követelmény bejelölve

var chkRef = document.getElementById("world");
var limit = 0;
checkboxlimit(chkRef, 2);

function checkboxlimit(checkgroup, lim) {
    limit = lim;
    for (var i = 0; i < 5; i++) { 
        checkgroup[i*3+2].addEventListener('click',chkChkBoxes);
    }
}

function chkChkBoxes() {
    var checkedcount = 0;
 
    for (var i = 0; i < 5; i++) {
        checkedcount += (chkRef[i*3+2].checked) ? 1 : 0;
        if (checkedcount > limit) {
            alert("Maximum " + limit + " követelményt jelölhetsz be!");
            this.checked = false;
            break;
        }
    }
}


//Minden mezőt töröl gomb működése
function torol() {
    //Érdemjegyeket törli
    document.getElementById("magyarIrodalom11").value = "";
    document.getElementById("magyarNyelvtan11").value = "";
    document.getElementById("tortenelem11").value = "";
    document.getElementById("matematika11").value = "";
    document.getElementById("valasztottNyelv11").value = "";
    document.getElementById("valasztottTargy11").value = "";
    document.getElementById("magyarIrodalom12").value = "";
    document.getElementById("magyarNyelvtan12").value = "";
    document.getElementById("tortenelem12").value = "";
    document.getElementById("matematika12").value = "";
    document.getElementById("valasztottNyelv12").value = "";
    document.getElementById("valasztottTargy12").value = "";

    //Érdemjegyek összesítését törli
    document.getElementById("jegyekOsszesPontszam").innerHTML = "";

    //Érettségi százalékok törlése
    document.getElementById("magyarNyelvSzazalek").value = "";
    document.getElementById("tortenelemSzazalek").value = "";
    document.getElementById("matematikaSzazalek").value = "";
    document.getElementById("valasztottNyelvSzazalek").value = "";
    document.getElementById("valasztottTargySzazalek").value = "";

    //Emelt beállítása alaphelyzetbe
    document.getElementById("magyarNyelvEmelt").value = "nincs";
    document.getElementById("tortenelemEmelt").value = "nincs";
    document.getElementById("matematikaEmelt").value = "nincs";
    document.getElementById("valasztottNyelvEmelt").value = "nincs";
    document.getElementById("valasztottTargyEmelt").value = "nincs";

    //Felvételi követelmény checkbox-ot visszaállítja üresbe
    document.getElementById("magyarNyelvKovetelmeny").checked = false;
    document.getElementById("tortenelemKovetelmeny").checked = false;
    document.getElementById("matematikaKovetelmeny").checked = false;
    document.getElementById("valasztottNyelvKovetelmeny").checked = false;
    document.getElementById("valasztottTargyKovetelmeny").checked = false;

    //Érettségi átlag törlése
    document.getElementById("erettsegiPontszam").innerHTML = "";

    //Érettségi pontos rész törlése
    document.getElementById("elsoErettsegiEmelt").innerHTML = "";
    document.getElementById("elsoErettsegiEmeltSzazalek").innerHTML = "";
    document.getElementById("masodikErettsegiEmelt").innerHTML = "";
    document.getElementById("masodikErettsegiEmeltSzazalek").innerHTML = "";
    document.getElementById("harmadikErettsegiEmelt").innerHTML = "";
    document.getElementById("harmadikErettsegiEmeltSzazalek").innerHTML = "";
    document.getElementById("negyedikErettsegiEmelt").innerHTML = "";
    document.getElementById("negyedikErettsegiEmeltSzazalek").innerHTML = "";
    document.getElementById("otodikErettsegiEmelt").innerHTML = "";
    document.getElementById("otodikErettsegiEmeltSzazalek").innerHTML = "";
    document.getElementById("erettsegiPontok").innerHTML = "";


    //Többletpontos rész törlése
    document.getElementById("nyelvvizsga").value = "nincs";
    document.getElementById("nyelvvizsgaPont").innerHTML = "";
    document.getElementById("emeltTobbletMagyar").innerHTML = "";
    document.getElementById("emeltTobbletMagyar50").innerHTML = "";
    document.getElementById("emeltTobbletTortenelem").innerHTML = "";
    document.getElementById("emeltTobbletTortenelem50").innerHTML = "";
    document.getElementById("emeltTobbletMatematika").innerHTML = "";
    document.getElementById("emeltTobbletMatematika50").innerHTML = "";
    document.getElementById("emeltTobbletValasztottNyelv").innerHTML = "";
    document.getElementById("emeltTobbletValasztottNyelv50").innerHTML = "";
    document.getElementById("emeltTobbletValasztottTargy").innerHTML = "";
    document.getElementById("emeltTobbletValasztottTargy50").innerHTML = "";
    document.getElementById("tobbletpontokOsszesen").innerHTML = "";

    //Összesítés pontjainak kitörlése
    document.getElementById("tanulmanyiPontokOsszesitesPontszam").innerHTML = "";
    document.getElementById("erettsegiPontokOsszesitesPontszam").innerHTML = "";
    document.getElementById("tobbletpontokOsszesitesPontszam").innerHTML = "";
    document.getElementById("osszesPont").innerHTML = "";
}


//Fő függvény: a számol gomb megnyomására kiszámol minden értéket.
function szamol() {

    //Változók létrehozása az év végi jegyek tárolásához
    var magyarIrodalom11 = parseInt(document.getElementById("magyarIrodalom11").value);
    var magyarIrodalom12 = parseInt(document.getElementById("magyarIrodalom12").value);
    var magyarNyelvtan11 = parseInt(document.getElementById("magyarNyelvtan11").value);
    var magyarNyelvtan12 = parseInt(document.getElementById("magyarNyelvtan12").value);
    var tortenelem11 = parseInt(document.getElementById("tortenelem11").value);
    var tortenelem12 = parseInt(document.getElementById("tortenelem12").value);
    var matematika11 = parseInt(document.getElementById("matematika11").value);
    var matematika12 = parseInt(document.getElementById("matematika12").value);
    var valasztottNyelv11 = parseInt(document.getElementById("valasztottNyelv11").value);
    var valasztottNyelv12 = parseInt(document.getElementById("valasztottNyelv12").value);
    var valasztottTargy11 = parseInt(document.getElementById("valasztottTargy11").value);
    var valasztottTargy12 = parseInt(document.getElementById("valasztottTargy12").value);


    //Hibaüzenet, ha nem 1 és 5 között
    if (magyarIrodalom11 > 5 || magyarIrodalom11 < 1) {
        alert("Az érdemjegynek 1 és 5 közötti egész számnak kell lennie!")
    }

    //Az irodalom és nyelvtan jegyek átlagának kiszámolása
    var irodalomNyelvtanAtlag11 = (magyarIrodalom11 + magyarNyelvtan11) / 2;
    var irodalomNyelvtanAtlag12 = (magyarIrodalom12 + magyarNyelvtan12) / 2;

    //Év végi osztályzatok összesítése
    var jegyekOsszesPontszam = (irodalomNyelvtanAtlag11 + irodalomNyelvtanAtlag12 + tortenelem11 + tortenelem12 + matematika11 + matematika12 + valasztottNyelv11 + valasztottNyelv12 + valasztottTargy11 + valasztottTargy12) * 2;
    document.getElementById("jegyekOsszesPontszam").innerHTML = jegyekOsszesPontszam + " pont";


    //Változók létrehozása az érettségi eredmények tárolásához
    var magyarNyelvErettsegi = parseInt(document.getElementById("magyarNyelvSzazalek").value);
    var tortenelemErettsegi = parseInt(document.getElementById("tortenelemSzazalek").value);
    var matematikaErettsegi = parseInt(document.getElementById("matematikaSzazalek").value);
    var valasztottNyelvErettsegi = parseInt(document.getElementById("valasztottNyelvSzazalek").value);
    var valasztottTargyErettsegi = parseInt(document.getElementById("valasztottTargySzazalek").value);


    //Hibaüzenet, ha érettségi százalékot hibásan adta meg
    if (magyarNyelvErettsegi > 100 || magyarNyelvErettsegi < 0) {
        alert("Az érettségi %-nak 0 és 100 között kell lennie.")
    }
    if (tortenelemErettsegi > 100 || tortenelemErettsegi < 0) {
        alert("Az érettségi %-nak 0 és 100 között kell lennie.")
    }
    if (matematikaErettsegi > 100 || matematikaErettsegi < 0) {
        alert("Az érettségi %-nak 0 és 100 között kell lennie.")
    }
    if (valasztottNyelvErettsegi > 100 || valasztottNyelvErettsegi < 0) {
        alert("Az érettségi %-nak 0 és 100 között kell lennie.")
    }
    if (valasztottTargyErettsegi > 100 || valasztottTargyErettsegi < 0) {
        alert("Az érettségi %-nak 0 és 100 között kell lennie.")
    }

    //Érettségi átlag kiszámolása
    var erettsegiAtlag = (magyarNyelvErettsegi + tortenelemErettsegi + matematikaErettsegi + valasztottNyelvErettsegi + valasztottTargyErettsegi) / 5;
    document.getElementById("erettsegiPontszam").innerHTML = Math.round(erettsegiAtlag) + " pont";


    //Érettségi tárgyak és pontok megjelenítése
    var magyarKell = displayErettsegiTargy("magyarNyelvKovetelmeny", "Magyar nyelv és Irodalom", "elso", magyarNyelvErettsegi);
    var tortenelemKell = displayErettsegiTargy("tortenelemKovetelmeny", "Történelem", "masodik", tortenelemErettsegi);
    var matematikaKell = displayErettsegiTargy("matematikaKovetelmeny", "Matematika", "harmadik", matematikaErettsegi);
    var valasztottNyelvKell = displayErettsegiTargy("valasztottNyelvKovetelmeny", "Választott nyelv", "negyedik", valasztottNyelvErettsegi);
    var valasztottTargyKell = displayErettsegiTargy("valasztottTargyKovetelmeny", "Választott tárgy", "otodik", valasztottTargyErettsegi);
    
    /*
        //Felvételi követelményként megjelölt érettségi tárgy beolvasása - checkbox pipa van/nincs + kiírás
        var magyarKell = document.getElementById("magyarNyelvKovetelmeny");
        if (magyarKell.checked == true) {
            document.getElementById("elsoErettsegiEmelt").innerHTML = "Magyar nyelv és irodalom";
            document.getElementById("elsoErettsegiEmeltSzazalek").innerHTML = magyarNyelvErettsegi + " pont";
        } else {
            elsoErettsegiEmelt.style.display = "none";
        }
    
        var tortenelemKell = document.getElementById("tortenelemKovetelmeny");
        if (tortenelemKell.checked == true) {
            document.getElementById("masodikErettsegiEmelt").innerHTML = "Történelem";
            document.getElementById("masodikErettsegiEmeltSzazalek").innerHTML = tortenelemErettsegi + " pont";
        } else {
            masodikErettsegiEmelt.style.display = "none";
        }
    
        var matematikaKell = document.getElementById("matematikaKovetelmeny");
        if (matematikaKell.checked == true) {
            document.getElementById("harmadikErettsegiEmelt").innerHTML = "Matematika";
            document.getElementById("harmadikErettsegiEmeltSzazalek").innerHTML = matematikaErettsegi + " pont";
        } else {
            harmadikErettsegiEmelt.style.display = "none";
        }
    
        var valasztottNyelvKell = document.getElementById("valasztottNyelvKovetelmeny");
        if (valasztottNyelvKell.checked == true) {
            document.getElementById("negyedikErettsegiEmelt").innerHTML = "Választott nyelv";
            document.getElementById("negyedikErettsegiEmeltSzazalek").innerHTML = valasztottNyelvErettsegi + " pont";
        } else {
            negyedikErettsegiEmelt.style.display = "none";
        }
    
        var valasztottTargyKell = document.getElementById("valasztottTargyKovetelmeny");
        if (valasztottTargyKell.checked == true) {
            document.getElementById("otodikErettsegiEmelt").innerHTML = "Választott tárgy";
            document.getElementById("otodikErettsegiEmeltSzazalek").innerHTML = valasztottTargyErettsegi + " pont";
        } else {
            otodikErettsegiEmelt.style.display = "none";
        }
    */
    //Hibaüzenet, ha 2-nél több követelményt jelölt be
    var kovetelmenyDBszam = 0;
    if (magyarKell.checked == true) {
        kovetelmenyDBszam += 1;
    }
    if (tortenelemKell.checked == true) {
        kovetelmenyDBszam += 1;
    }
    if (matematikaKell.checked == true) {
        kovetelmenyDBszam += 1;
    }
    if (valasztottNyelvKell.checked == true) {
        kovetelmenyDBszam += 1;
    }
    if (valasztottTargyKell.checked == true) {
        kovetelmenyDBszam += 1;
    }
    if (kovetelmenyDBszam > 2) {
        alert("Csak kettő tárgyat jelölhetsz meg követelményként!");

        return;
    }

    //Érettségi pontok kiszámolása
    var erettsegiPontok = 0;
    if (magyarKell.checked == true) {
        erettsegiPontok += magyarNyelvErettsegi;
    }
    if (tortenelemKell.checked == true) {
        erettsegiPontok += tortenelemErettsegi;
    }
    if (matematikaKell.checked == true) {
        erettsegiPontok += matematikaErettsegi;
    }
    if (valasztottNyelvKell.checked == true) {
        erettsegiPontok += valasztottNyelvErettsegi;
    }
    if (valasztottTargyKell.checked == true) {
        erettsegiPontok += valasztottTargyErettsegi;
    }
    if (erettsegiPontok > 200) {
        document.getElementById("erettsegiPontok").innerHTML = "200 pont";
    } else document.getElementById("erettsegiPontok").innerHTML = erettsegiPontok + " pont";

    
    //Ha nincs bejelölve követelményként, akkor törölje ki a tárgyat és a pontszámot az érettségi pontoknál
    if (magyarKell.checked == false) {
        document.getElementById("elsoErettsegiEmelt").innerHTML = "";
        document.getElementById("elsoErettsegiEmeltSzazalek").innerHTML = "";
    }
    if (tortenelemKell.checked == false) {
        document.getElementById("masodikErettsegiEmelt").innerHTML = "";
        document.getElementById("masodikErettsegiEmeltSzazalek").innerHTML = "";
    }
    if (matematikaKell.checked == false) {
        document.getElementById("harmadikErettsegiEmelt").innerHTML = "";
        document.getElementById("harmadikErettsegiEmeltSzazalek").innerHTML = "";
    }
    if (valasztottNyelvKell.checked == false) {
        document.getElementById("negyedikErettsegiEmelt").innerHTML = "";
        document.getElementById("negyedikErettsegiEmeltSzazalek").innerHTML = "";
    }
    if (valasztottTargyKell.checked == false) {
        document.getElementById("otodikErettsegiEmelt").innerHTML = "";
        document.getElementById("otodikErettsegiEmeltSzazalek").innerHTML = "";
    }





    //Felvételi követelményként maximum kettő érettségi tárgy jelölhető - hibaüzenet
    var kettoKovetelmeny = 0;
    if (magyarKell.checked == true) {
        kettoKovetelmeny += 1;
    }
    if (tortenelemKell.checked == true) {
        kettoKovetelmeny += 1;
    }
    if (matematikaKell.checked == true) {
        kettoKovetelmeny += 1;
    }
    if (valasztottNyelvKell.checked == true) {
        kettoKovetelmeny += 1;
    }
    if (valasztottTargyKell.checked == true) {
        kettoKovetelmeny += 1;
    }



    //Emeltszintű érettségi tárgyak értékeinek beolvasása - van vagy nincs
    var magyarNyelvEmelt = document.getElementById("magyarNyelvEmelt").value;
    var tortenelemEmelt = document.getElementById("tortenelemEmelt").value;
    var matematikaEmelt = document.getElementById("matematikaEmelt").value;
    var valasztottNyelvEmelt = document.getElementById("valasztottNyelvEmelt").value;
    var valasztottTargyEmelt = document.getElementById("valasztottTargyEmelt").value;

    //Érettségi pontszámok számolása
    if (magyarNyelvEmelt == "van" && magyarKell.checked == true && magyarNyelvErettsegi >= 45) {
        document.getElementById("emeltTobbletMagyar").innerHTML = "Magyar nyelv és irodalom";
        document.getElementById("emeltTobbletMagyar50").innerHTML = 50 + " pont";
    }
    if (tortenelemEmelt == "van" && tortenelemKell.checked == true && tortenelemErettsegi >= 45) {
        document.getElementById("emeltTobbletTortenelem").innerHTML = "Történelem";
        document.getElementById("emeltTobbletTortenelem50").innerHTML = 50 + " pont";
    }
    if (matematikaEmelt == "van" && matematikaKell.checked == true && matematikaErettsegi >= 45) {
        document.getElementById("emeltTobbletMatematika").innerHTML = "Matematika";
        document.getElementById("emeltTobbletMatematika50").innerHTML = 50 + " pont";
    }
    if (valasztottNyelvEmelt == "van" && valasztottNyelvKell.checked == true && valasztottNyelvErettsegi >= 45) {
        document.getElementById("emeltTobbletValasztottNyelv").innerHTML = "Választott nyelv";
        document.getElementById("emeltTobbletValasztottNyelv50").innerHTML = 50 + " pont";
    }
    if (valasztottTargyEmelt == "van" && valasztottTargyKell.checked == true && valasztottTargyErettsegi >= 45) {
        document.getElementById("emeltTobbletValasztottTargy").innerHTML = "Választott tárgy";
        document.getElementById("emeltTobbletValasztottTargy50").innerHTML = 50 + " pont";
    }

    var nyelvvizsga = document.getElementById("nyelvvizsga").value;
    if (nyelvvizsga == "b2") {
        document.getElementById("nyelvvizsgaPont").innerHTML = 28 + " pont";
    }
    if (nyelvvizsga == "c1") {
        document.getElementById("nyelvvizsgaPont").innerHTML = 40 + " pont";
    }

    //Többletpontok kiszámolása
    var tobbletPontok = 0;
    if (magyarNyelvEmelt == "van" && magyarKell.checked == true && magyarNyelvErettsegi >= 45) {
        tobbletPontok += 50;
    }
    if (tortenelemEmelt == "van" && tortenelemKell.checked == true && tortenelemErettsegi >= 45) {
        tobbletPontok += 50;
    }
    if (matematikaEmelt == "van" && matematikaKell.checked == true && matematikaErettsegi >= 45) {
        tobbletPontok += 50;
    }
    if (valasztottNyelvEmelt == "van" && valasztottNyelvKell.checked == true && valasztottNyelvErettsegi >= 45) {
        tobbletPontok += 50;
    }
    if (valasztottTargyEmelt == "van" && valasztottTargyKell.checked == true && valasztottTargyErettsegi >= 45) {
        tobbletPontok += 50;
    }
    if (nyelvvizsga == "b2") {
        tobbletPontok += 28;
    }
    if (nyelvvizsga == "c1") {
        tobbletPontok += 40;
    }


    if (tobbletPontok > 100) {
        document.getElementById("tobbletpontokOsszesen").innerHTML = "100 pont";
    } else document.getElementById("tobbletpontokOsszesen").innerHTML = tobbletPontok + " pont";

    if (tobbletPontok > 100) {
        document.getElementById("tobbletpontokOsszesitesPontszam").innerHTML = "100 pont";
    } else document.getElementById("tobbletpontokOsszesitesPontszam").innerHTML = tobbletPontok + " pont";

    var tobbletPontokVegso = parseInt(document.getElementById("tobbletpontokOsszesitesPontszam").innerHTML);

    //Többletpontoknál törölje, ahol nincs az emelt bejelölve + a nyelvvizsga
    if (magyarNyelvEmelt == "nincs" || magyarKell.checked == false || magyarNyelvErettsegi < 45) {
        document.getElementById("emeltTobbletMagyar").innerHTML = "";
        document.getElementById("emeltTobbletMagyar50").innerHTML = "";
    }
    if (tortenelemEmelt == "nincs" || tortenelemKell.checked == false || tortenelemErettsegi < 45) {
        document.getElementById("emeltTobbletTortenelem").innerHTML = "";
        document.getElementById("emeltTobbletTortenelem50").innerHTML = "";
    }
    if (matematikaEmelt == "nincs" || matematikaKell.checked == false || matematikaErettsegi < 45) {
        document.getElementById("emeltTobbletMatematika").innerHTML = "";
        document.getElementById("emeltTobbletMatematika50").innerHTML = "";
    }
    if (valasztottNyelvEmelt == "nincs" || valasztottNyelvKell.checked == false || valasztottNyelvErettsegi < 45) {
        document.getElementById("emeltTobbletValasztottNyelv").innerHTML = "";
        document.getElementById("emeltTobbletValasztottNyelv50").innerHTML = "";
    }
    if (valasztottTargyEmelt == "nincs" || valasztottTargyKell.checked == false || valasztottTargyNyelvErettsegi < 45) {
        document.getElementById("emeltTobbletValasztottTargy").innerHTML = "";
        document.getElementById("emeltTobbletValasztottTargy50").innerHTML = "";
    }
    if (nyelvvizsga == "nincs") {
        document.getElementById("nyelvvizsgaPont").innerHTML = "";
    }

    //Összesítő táblázat kitöltése
    var tanulmanyiPontok = jegyekOsszesPontszam + Math.round(erettsegiAtlag);
    if (tanulmanyiPontok < erettsegiPontok) {
        document.getElementById("tanulmanyiPontokOsszesitesPontszam").innerHTML = erettsegiPontok + " pont";
        document.getElementById("duplazasSzoveg").innerHTML = "Tanulmányi pontok duplázással!"
        document.getElementById("duplazasSzoveg").style.fontStyle = "italic";
        document.getElementById("duplazasSzoveg").style.fontSize = "13px";
        document.getElementById("duplazasSzoveg").style.color = "darkred";
    } else {
        document.getElementById("tanulmanyiPontokOsszesitesPontszam").innerHTML = tanulmanyiPontok + " pont";
    }
    document.getElementById("erettsegiPontokOsszesitesPontszam").innerHTML = erettsegiPontok + " pont";

    document.getElementById("osszesPont").innerHTML = tanulmanyiPontok + erettsegiPontok + tobbletPontokVegso + " pont";
}

