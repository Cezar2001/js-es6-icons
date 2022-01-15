const icone = [
{
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: 'orange'
},
{
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green'
},
{
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green'
},
{
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green'
},
{
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: 'green'
},
{
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue'
},
{
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue'
},
{
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue'
},
{
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: 'blue'
}
];

function getIcon(iconInfo) {
    const {name, prefix, family, color} = iconInfo;
    
    return `
    <div class="boxes">
    <i class="${family} ${prefix}${name} ${color}"></i>
    <p>${name}</p>
    </div>
    `
}

const box = document.querySelector('.container')

icone.forEach((icona) => {
    box.innerHTML +=  getIcon(icona);
})

const select = document.querySelector('#tipi')
select.addEventListener("change", function(){
    // cancella tutti le icone già presenti
    box.innerHTML = "";
    // ottieni il valore selezionato
    let valoreSelezionato = select.value;
    // se è all stampa tutto
    console.log(valoreSelezionato);
    if(valoreSelezionato==="all"){
        icone.forEach((icona) => {
            box.innerHTML +=  getIcon(icona);
        })        
    } else{
        //filtra le icone con quel tipo 
        // filter ha come parametro una funzione che è vera se voglio prendere l'elemento
        let iconeDelTipoSelezionato = icone.filter(
             (icona) => {
                if(icona.type === valoreSelezionato){return true;} else {return false;}
             }            
        )
        // stampa
        // ricorda che all'inziao ho cancellato tutto il contenturo di box
        iconeDelTipoSelezionato.forEach((icona) => {
            box.innerHTML +=  getIcon(icona);
        })     
    }

})