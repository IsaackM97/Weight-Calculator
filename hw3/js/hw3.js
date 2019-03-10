
function weightConverter(valnumber) {
    document.getElementById("outputKilograms").innerHTML=(valnumber/2.2046).toFixed(2);



}

function weightConverter2(valnumber) {
    document.getElementById("outputounces").innerHTML = (valnumber *16).toFixed(2);
}

function weightConverter3(valnumber) {
    document.getElementById("outputstones").innerHTML = (valnumber *0.071429).toFixed(2);
}