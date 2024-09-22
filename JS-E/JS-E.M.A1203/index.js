let generate_button = document.getElementById("generate");
var theImages = [{
    src: "https://picsum.photos/id/870/200/300",
    width: "300",
    height: "300",
}, {
    src: "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
    width: "300",
    height: "300",
}, {
    src: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    width: "300",
    height: "300",
}, {
    src: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    width: "300",
    height: "300",
}, {
    src: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    width: "300",
    height: "300",
}, {
    src: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
    width: "300",
    height: "300",
}, ];
let image = document.getElementsByClassName('img');
generate_button.addEventListener("click", function() {

    let arr = [];
    while (arr.length < 3) {
        var r = Math.floor(Math.random() * 6);
        if (!arr.indexOf(r)) {
            arr.push(r);
        }
    }
    for (var i = 0; i < image.length; i++) {
        image[i].src = `${theImages[arr[i]].src}`;
        image[i].width = `${theImages[arr[i]].width}`;
        image[i].height = `${theImages[arr[i]].height}`;
    }

})