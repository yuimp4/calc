var toCislo = 0;
var mezera = "";
var znaky = false;
var pocet = 0;
var znaminka;
var pocitej = [];
var cisilka = [];
var vysledek = 0;
var bylonadruhou = false;
var pocitame = false;

function cislo(a) {
    if (pocet < 15 && znaky) {
        toCislo *= 10;
        toCislo += a;
        pocet++;
        document.getElementById("disp").innerHTML = mezera + toCislo ;
        znaky = true;
    }
        else if (znaky == false) {
            toCislo = 0;
            toCislo += a;
            pocet++;
            document.getElementById("disp").innerHTML = mezera + toCislo ;
            znaky = true;
        }
}

function znak(a) {
    znaminka = a;
    if (znaky && znaminka != '^2' && !bylonadruhou) {
        cisilka.push(toCislo);
        mezera += toCislo + znaminka;
        document.getElementById("disp").innerHTML = mezera;
        znaky = false;
        pocitej.push(a);
        bylonadruhou = false;
    }
        else if (znaky && znaminka != '^2' && bylonadruhou) {
            mezera += toCislo + znaminka;
            document.getElementById("disp").innerHTML = mezera;
            znaky = false;
            pocitej.push(a);
            bylonadruhou = false;
        }
            else if (znaky && znaminka == '^2' && toCislo != 0) {
                //mezera += toCislo + znaminka;
                var cislo = toCislo*toCislo
                document.getElementById("disp").innerHTML = mezera + cislo;
                toCislo = cislo; 
                cisilka.push(toCislo)
                bylonadruhou = true;
            }
        console.log(cisilka + "\t#######\t" + pocitej);
}

function vymaz () {
    toCislo = 0;
    pocitej = [];
    cisilka = [];
    mezera = "";
    pocitame = false;
    document.getElementById('disp').innerHTML = 0;
}

function rovnaSe () {
    cisilka.push(toCislo);
    console.log(cisilka + "\t#######\t" + pocitej);
    
    for (let i = 0; i < pocitej.length; i++) {
        if (pocitej[i] == '×') {
            if (!pocitame){
                vysledek += cisilka[i]*cisilka[i + 1];
                document.getElementById('disp').innerHTML = vysledek;
                console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "nasobeni\t" + vysledek);
                pocitame = true;
            }
            else {
                vysledek *= cisilka[i + 1];
                document.getElementById('disp').innerHTML = vysledek;
                console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "nasobeni\t" + vysledek);
                pocitame = true;
            }
        }

            else if (pocitej[i] == '/') {
                if (!pocitame) {
                    vysledek += cisilka[i] / cisilka[i +1];
                    document.getElementById('disp').innerHTML = vysledek;
                    pocitame = true;
                    console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "deleni\t" + vysledek);
                }
                else {
                    vysledek /= cisilka[i +1];
                    document.getElementById('disp').innerHTML = vysledek;
                    console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "deleni\t" + vysledek);
                    pocitame = true;
                }
            }   

                else if (pocitej[i] == '+') {
                    if (!pocitame){
                        vysledek += cisilka[i] + cisilka[i +1];
                        document.getElementById('disp').innerHTML = vysledek;
                        console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "scitani\t" + vysledek);
                        pocitame = true;
                    }
                    else {
                        vysledek += cisilka[i +1];
                        document.getElementById('disp').innerHTML = vysledek;
                        console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "scitani\t" + vysledek);
                        pocitame = true;
                    }
                }

                else if (pocitej[i] == '-') {
                    if (!pocitame) {
                        vysledek += cisilka[i] - cisilka[i + 1];
                        document.getElementById('disp').innerHTML = vysledek;
                        console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "odecitani\t" + vysledek);
                        pocitame = true;
                    }
                    else {
                        vysledek -= cisilka[i + 1];
                        document.getElementById('disp').innerHTML = vysledek;
                        console.log(cisilka + "\t#######\t" + pocitej + "\t#######\t" + "odecitani\t" + vysledek);
                        pocitame = true;
                    }
                }
    }
    pocitame = false;
    toCislo = 0;
    pocitej = [];
    cisilka = [];
    mezera = "";
    vysledek = 0;
}
















/*
function nula() {
    var cislo = 0;
    var cis = "0";
    document.getElementById("disp").innerText = cislo + mezera;
}
function jedna() {
    var cislo = 1;
    var cis = "1";
    document.getElementById("disp").innerText = cislo + mezera;
}
function dva() {
    var cislo = 2;
    document.getElementById("disp").innerText = cislo;
}
function tri() {
    var cislo = 3;
    document.getElementById("disp").innerText = cislo;
}
function ctyri() {
    var cislo = 4;
    document.getElementById("disp").innerText = cislo;
}
function pet() {
    var cislo = 5;
    document.getElementById("disp").innerText = cislo;
}
function sest() {
    var cislo = 6;
    document.getElementById("disp").innerText = cislo;
}
function sedm() {
    var cislo = 7;
    document.getElementById("disp").innerText = cislo;
}
function osm() {
    var cislo = 8;
    document.getElementById("disp").innerText = cislo;
}
function devet() {
    var cislo = 9;
    document.getElementById("disp").innerText = cislo;
}
*/