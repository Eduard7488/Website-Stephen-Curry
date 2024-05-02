function statistikSpielerAnzeigen() {
    document.getElementById('wrapper').style.display = 'inline-block';
    document.getElementById('teamsWoErWar').style.display = 'none';
    document.getElementById('wurfqouteAnzeigen').style.display = 'none';
    document.getElementById('erklaerungVonDenBegriffen').style.display = 'grid';
}

function teamsAnzeigen() {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('teamsWoErWar').style.display = 'inline-block';
    document.getElementById('wurfqouteAnzeigen').style.display = 'none';
    document.getElementById('erklaerungVonDenBegriffen').style.display = 'none';

}

function wurfqouteAnzeigen() {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('teamsWoErWar').style.display = 'none';
    document.getElementById('wurfqouteAnzeigen').style.display = 'block';
    document.getElementById('erklaerungVonDenBegriffen').style.display = 'none';

}

// All diese Funktionen, sind dafür da dass beim Button nur ein Element angezeigt wird