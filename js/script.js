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

// let all;
// let animal;
// let vegetable;
// let user;

// const selectType = document.querySelector('.select')

// if (icone.type )


const select = icone.filter(function (type) {
    const tipo = type;
    return tipo === 'animal' || tipo === 'vegetable' || tipo === 'user';
})

function getIcon(iconInfo) {
    const {name, prefix, family, color} = iconInfo;

    return `${family} ${prefix}${name} ${color}`
}

const box = document.querySelector('.container')

icone.forEach((element) => {
   const newBox = document. createElement('div');
   newBox.className = `box ${getIcon(element)}`;
   box.append(newBox, select, element.name);
//    console.log(newBox.innerHTML);
})



// const select = icone.filter((type) => {
//     if (type === all) {
//         return true;
//     } else if (type === animal){
//         return true;
//     } else if (type === vegetable){
//         return true;
//     } else if (type === user){
//         return true;
//     }
// })
