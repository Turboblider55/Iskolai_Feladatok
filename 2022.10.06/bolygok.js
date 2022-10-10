const bolygok=[
    {   id:1,
        name:'Merkúr',
        img:'merkur.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010301Merkur/merkur.html' },
    {   id:2,
        name:'Vénusz',
        img:'venusz.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010302Venusz/venusz.html' },
    {   id:3,
        name:'Föld',
        img:'fold.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/01030301Fold/fold.html' },
    {   id:4,
        name:'Mars',
        img:'mars.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010304Mars/Mars.html' },
    {   id:5,
        name:'Jupiter',
        img:'jupiter.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010305Jupiter/Jupiter.html' },
    {   id:6,
        name:'Szaturnusz',
        img:'saturn.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010306Szaturnusz/Szaturnusz.html' },
    {   id:7,
        name:'Uránusz',
        img:'uranus.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010308Neptunusz/Neptunusz.html' },
    {   id:8,
        name:'Neptunusz',
        img:'neptun.jpg',
        descr:'http://astro.u-szeged.hu/oktatas/csillagaszat/6_Naprendszer/010308Neptunusz/Neptunusz.html' },
]

let container = document.querySelector('.container');
var LoadData = ()=>{
        let row = '<div class="row" >';
        for(let i of bolygok){
            row += `<div class='col-lg-3 col-6 border border-2 border-white p-3 d-flex flex-column justify-content-between' >`;
            row += `<img src="${i.img}" class="img img-fluid h-75" onclick="showmodal(this)" id="${i.id}" data-toggle="modal" data-target="#exampleModal">`;
            row += `<h3 class='border-top border-2 border-white text-white'>${i.name}</h3>`;
            row += `</div>`
        }
        row += '</div>';
        container.innerHTML += row;

        document.querySelectorAll('h3').forEach(item=>{
            console.log(item);
        })
}
    let showmodal = (obj) =>{
        console.log(obj.id)
        let bolygo = bolygok.find(items=>items.id == obj.id);
        document.querySelector('.modal-title').innerHTML = bolygo.name;
        document.querySelector('.modal-body').innerHTML = `<img src="${bolygo.img}>`;
    }
