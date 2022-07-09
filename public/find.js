
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});



function findCrypto(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const crypto = params.name;
    console.log(crypto);
    let data = getapi();
    data.then((data) => {
        let objet = data.result;
        console.log(objet)
        for (let i = 0; i < objet.length;i++){

            //console.log(typeof objet[i][name])
            if (objet[i]["name"] === crypto){
                console.log(objet[i]["name"])
                let marcketcap = objet[i]["marketCap"]
                if (objet[i]["name"]=== "Binance USD"){
                    let objet = "Binance"
                    document.getElementsByClassName("name")[0].innerHTML = objet
                } else {
                    document.getElementsByClassName("name")[0].innerHTML = objet[i]["name"]
                }
                document.getElementsByClassName("rank")[0].innerHTML = "Rank : "+objet[i]["rank"]
                document.getElementsByClassName("price")[0].innerHTML = "Price : "+ objet[i]["price"]
                document.getElementsByClassName("day")[0].innerHTML = "Day : "+objet[i]["day"]
                document.getElementsByClassName("week")[0].innerHTML = "Week : "+objet[i]["week"]
                document.getElementsByClassName("marketcap")[0].innerHTML = "Marcket Cap : "+ marcketcap.substr(marcketcap.indexOf("$",1),marcketcap.length)
                document.getElementsByClassName("volume")[0].innerHTML ="Volume : "+ objet[i]["volume"]
                document.getElementsByClassName("circulating")[0].innerHTML ="Circulating : "+ objet[i]["circulatingSupply"]
            }
        }
    })
}

findCrypto()