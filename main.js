var names = [
    "1. My Father (Sreenivasa)",
    "2. My Mother (Sowjanya)",
    "3. My Sister (Shloka)",
    "4. Me (Sreehan)"
];
var images = [
    "dad.jpg",
    "mom.jpg",
    "shloka.jpg",
    "me.jpg"
];
var i = 0;
function next() {
    i++;
    if (i == 4) {
        i = 0;
    }
    document.getElementById("name").innerHTML = names[i];
    document.getElementById("image").src = images[i];
}