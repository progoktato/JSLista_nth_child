function letrehoz() {
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát
    const kontener = document.getElementById("DIV_generalt_lista");
    //Az <ol> elem (node) létrehozása
    const ol_node = document.createElement("ol");
    //Behelyezés a DIV-be
    kontener.appendChild(ol_node);

    //Ne úgy képzelje, mintha egy szöveges állományt írna és szeretne HTML dokumentumhoz jutni!
    //Ott kellene írni <ol>-t majd a munka végeztével </ol>-t is.
    //Itt a node létrehozása egyben a záró tage-t is jelenti HTML szinten!

    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!

    var lista_elemszam = parseInt(document.getElementById("elemek_szam").value);
    for (let index = 0; index < lista_elemszam; index++) {
        //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel
        const li_elem = document.createElement("li");
        ol_node.appendChild(li_elem);
    }

    //Praktikusabb előbb az összes <li> elemet felvenni és csak utána beletenni az <ol>-t a DIV-be!
}

function szinez() {
    //nth-child() - hoz szükséges értékek beszerzése
    const n = document.getElementById("nth_n").value;
    const first = document.getElementById("nth_first").value;
    const szelektor_sora = `li:nth-child(${n}n+${first})`;

    //Aki nem szereti a AltGr+7 -> `` azon belül ${} formulát, annak a hagyományos változat:
    const szelektor_sora_hagyomanyos = "li:nth-child(" + n + "n+" + first + ")";

    //Lekérjük azokn az <li> elemeknek a kollekcióját, amelyekre igaz a szelektor

    var szurt_li_elemek = document.querySelectorAll(szelektor_sora);
    //Ilyen elemből ennyi van:  szurt_li_elemek.length

    //Végigmegyünk minden elemen és a listában megadott színűre állítjuk a backgroundColor-t
    const megadott_szin = document.getElementById("szinek_listaja").value;
    for (let index = 0; index < szurt_li_elemek.length; index++) {
        szurt_li_elemek[index].style.backgroundColor = megadott_szin;
    }
}

function szelektorParamterValtozas(kuldo, mi_valtozott) {
    document.getElementById(mi_valtozott).innerHTML = kuldo.value;
}


function szinekTorles() {
    var osszes_li_elem = document.getElementsByTagName("li");

    for (let index = 0; index < osszes_li_elem.length; index++) {
        osszes_li_elem[index].style.backgroundColor = "";
    }
}
