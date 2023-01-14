const main = document.querySelector("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id','victory');
newHeader.innerHTML = "Susan is the champion";
document.body.append(newHeader);

//document.getElementById('victory').textContent = 'SUSAN is the champion';
//newHeader.textContent = `Susan is the champion`;



