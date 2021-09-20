const request = new XMLHttpRequest();
const image = document.querySelector("#dog-image");
const btn = document.querySelector("#dog-finder")
request.open("GET", "https://dog.ceo/api/breed/hound/images", true);
request.send();
request.onload = () => {
    let i = Object.keys(JSON.parse(request.response).message).length;
    btn.addEventListener('click', () => {
        if (request.status == 200) {
            image.src=(JSON.parse(request.response).message[Math.floor(Math.random() * i)]);
        } else {
            console.log(`error ${request.status}`);
        }
    });

}