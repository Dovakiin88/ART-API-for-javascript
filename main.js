fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('CRAP DONT WORK');
        }
    })
    .then(data => {
        console.log(data);
        displayArt(data)
    })
    .catch((error)=> console.error("FETCH ERROR:", error))

function displayArt(data){
    const art = data.data[0];
    const artDiv = document.getElementById("fig1");
    const zetitle = document.getElementById("title");
    const zeinfo = document.getElementById("info");
    
    const artTitle = art.title;
    const heading = document.createElement("h3");
    heading.innerHTML = `Title: ${artTitle} <br> <br>`
    zetitle.appendChild(heading);
    
    zetitle.style.fontSize = "x-large"
    
    const info = document.createElement("h5");
    info.innerHTML = `Origin: ${art.place_of_origin} <br> Composition Type: ${art.classification_title} <br> Date Displayed: ${art.date_display} <br> Artist Name: ${art.artist_title}`
    zeinfo.appendChild(info)

    zeinfo.style.fontSize = "large"
    
    const artImage = document.createElement("img");
    imgurl ='https://www.artic.edu/iiif/2/' + art.image_id + '/full/243,/0/default.jpg'
    artImage.src = imgurl;
    artDiv.appendChild(artImage);
    /*console.log(imgurl)*/

    artDiv.style.justifyContent = "center"
    artDiv.style.alignContent = "center"
}


fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('CRAP DONT WORK');
        }
    })
    .then(data => {
        console.log(data);
        displayArt2(data)
    })
    .catch((error)=> console.error("FETCH ERROR:", error))

function displayArt2(data2){
    const art2 = data2.data[1]
    const artDiv2 = document.getElementById("fig2");
    const zetitle2 = document.getElementById("title2")
    const zeinfo2 = document.getElementById("info2")
    
    const artTitle2 = art2.title;
    const heading2 = document.createElement("h3")
    heading2.innerHTML = `Title: ${artTitle2} <br> <br>`
    zetitle2.appendChild(heading2);

    zetitle2.style.fontSize = "x-large"

    const info2 = document.createElement("h5");
    info2.innerHTML = `Origin: ${art2.place_of_origin} <br> Composition Type: ${art2.classification_title} <br> Date Displayed: ${art2.date_display} <br> Artist Name: ${art2.artist_title}`
    zeinfo2.appendChild(info2)

    zeinfo2.style.fontSize = "large"
    
    const artImage2 = document.createElement("img");
    imgurl2 ='https://www.artic.edu/iiif/2/' + art2.image_id + '/full/243,/0/default.jpg'
    artImage2.src = imgurl2;
    artDiv2.appendChild(artImage2);
    console.log(imgurl)
}
