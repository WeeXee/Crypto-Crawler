

async function Expensive() {
    let data = getapi()
    let value = [0, 0, 0];
    let name = ["x", "y", "z"];
    data.then((data) => {
        //console.log(data)
        const object = data.result
       // console.log(object)
        for (let i = 0; i < object.length; i++) {
            let percent = parseFloat(object[i]["price"].replace('$', '').replace(',', ''))
                //  console.log(percent)
            if (percent > value[0]) {
                value[2] = value[1];
                value[1] = value[0];
                value[0] = percent;
                name[2] = name[1];
                name[1] = name[0];
                name[0] = object[i]["name"];
            } else if (percent > value[1]) {
                value[2] = value[1];
                value[1] = percent;
                name[2] = name[1];
                name[1] = object[i]["name"];

            } else if (percent > value[2]) {
                value[2] = percent;
                name[2] = object[i]["name"];
            }
        }
        console.log("Expensive\t" + name);
        console.log(name)
        document.getElementsByClassName("first1")[0].innerHTML ="1 "+ name[0] + "\t" +object[0]["price"]
        document.getElementsByClassName("first1")[0].setAttribute("href","/views/byname.html?name="+ name[0])
        document.getElementsByClassName("second1")[0].innerHTML ="2 "+ name[1] + "\t" + object[1]["price"]
        document.getElementsByClassName("second1")[0].setAttribute("href","/views/byname.html?name="+ name[1])
        document.getElementsByClassName("third1")[0].innerHTML ="3 "+ name[2] + "\t" + object[2]["price"]
        document.getElementsByClassName("third1")[0].setAttribute("href","/views/byname.html?name="+ name[2])

    })


}

function Rising() {
    let data = getapi()
    let value = [0, 0, 0];
    let name = ["x", "y", "z"];
    data.then((data) => {
        //console.log(data)
        const object = data.result
            //console.log(typeof object)
        for (let i = 0; i < object.length; i++) {
            let percent = parseFloat(object[i]["day"].replace('%', ''))
                //  console.log(percent)
            if (percent > value[0]) {
                value[2] = value[1];
                value[1] = value[0];
                value[0] = percent;
                name[2] = name[1];
                name[1] = name[0];
                name[0] = object[i]["name"];
            } else if (percent > value[1]) {
                value[2] = value[1];
                value[1] = percent;
                name[2] = name[1];
                name[1] = object[i]["name"];

            } else if (percent > value[2]) {
                value[2] = percent;
                name[2] = object[i]["name"];
            }

        }
        document.getElementsByClassName("first2")[0].innerHTML = "1 "+ name[0] + "\t" +object[0]["day"]
        document.getElementsByClassName("first2")[0].setAttribute("href","/views/byname.html?name="+ name[0])
        document.getElementsByClassName("second2")[0].innerHTML = "2 "+ name[1] + "\t" +object[1]["day"]
        document.getElementsByClassName("second2")[0].setAttribute("href","/views/byname.html?name="+ name[1])
        document.getElementsByClassName("third2")[0].innerHTML = "3 "+ name[2] + "\t" +object[2]["day"]
        document.getElementsByClassName("third2")[0].setAttribute("href","/views/byname.html?name="+ name[2])
        console.log("rising\t" + name)
        })
}

function Circulating() {
    let data = getapi()
    let value = [0, 0, 0];
    let name = ["x", "y", "z"];
    data.then((data) => {
        // console.log(data)
        const object = data.result
            // console.log(typeof object)
        for (let i = 0; i < object.length; i++) {
            let percent = parseInt(object[i]["circulatingSupply"].replace(/,/g, ''))
                //console.log(percent)
            if (percent > value[0]) {
                value[2] = value[1];
                value[1] = value[0];
                value[0] = percent;
                name[2] = name[1];
                name[1] = name[0];
                name[0] = object[i]["name"];
            } else if (percent > value[1]) {
                value[2] = value[1];
                value[1] = percent;
                name[2] = name[1];
                name[1] = object[i]["name"];

            } else if (percent > value[2]) {
                value[2] = percent;
                name[2] = object[i]["name"];
            }
        }
        console.log("Circulating\t" + name)
        document.getElementsByClassName("first3")[0].innerHTML = "1 "+ name[0] + " \t\t" +object[0]["circulatingSupply"]
        document.getElementsByClassName("first3")[0].setAttribute("href","/views/byname.html?name="+ name[0])
        document.getElementsByClassName("second3")[0].innerHTML = "2 "+ name[1] + "\t" +object[1]["circulatingSupply"]
        document.getElementsByClassName("second3")[0].setAttribute("href","/views/byname.html?name="+ name[1])
        document.getElementsByClassName("third3")[0].innerHTML ="3 "+ name[2] + "\t" +object[2]["circulatingSupply"]
        document.getElementsByClassName("third3")[0].setAttribute("href","/views/byname.html?name="+ name[2])
    })

}

Expensive()
Rising()
Circulating()
