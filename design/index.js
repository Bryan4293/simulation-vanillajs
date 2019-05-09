document.getElementById('button').addEventListener('click', function(){
    let inputName = document.getElementsByTagName('input')[0].value;
    let inputAmount = document.getElementsByTagName('input')[1].value;
    let ul = document.querySelector('ul');
    ul.innerHTML += "<ul>" + inputName + " $" + inputAmount + "</ul>";
})

