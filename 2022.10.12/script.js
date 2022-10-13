const api_key = '002d24f657963a857ceee13a3a627595';

let datas = [];

const url=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=hu&page=1&include_adult=false&query=`

const getMovieCard = (img,title,id) => {
    return `
    <div class="card" style="width:15rem;">
  <img src="${img}" class="card-img-top" alt="Image">
  <div class="card-body text-center">
    <h5 class="card-title">${title}<br><br><div class="btn" data-toggle="modal" data-target="#exampleModal" id="${id}" onclick=LoadModalData(this)>További Info</div></h5>
  </div>
</div>`;
}

const LoadModalData = (element) =>{
    const data = datas.find(item=>item.id == element.id);
    console.log(data);
    document.querySelector("#Link").href = `https://www.themoviedb.org/movie/${data.id}`;
    document.querySelector("#Link").target = "_blank";
    document.querySelector('.modal-title').innerHTML = '';
    document.querySelector('.modal-title').innerHTML = data.title
    document.querySelector('.modal-body').innerHTML = '';
    document.querySelector('.modal-body').innerHTML = `<img src="https://image.tmdb.org/t/p/w300/${data.poster_path}">`
    document.querySelector('.modal-body').innerHTML += `<p>${data.overview}</p`;
}

const renderData = (data) => {
    let row = document.getElementById('movies');
    row.innerHTML = "";
    for(let i of data){
        let col = document.createElement('div');
        col.classList.add('col');
        let imgUrl = `https://image.tmdb.org/t/p/w300/${i.poster_path}`
        const newCard = getMovieCard(imgUrl,i.title,i.id);
        col.innerHTML = newCard;
        row.appendChild(col);
    }
}
const getData = async (url)=>{
    const promise = await fetch(url);
    const data = await promise.json();
    console.log(data.results);
    datas = data.results;
    renderData(data.results);
}

//getData(url);

const getSearchText = ()=>{
    let Searching_data = document.getElementById('Search').value;
    if(Searching_data){
        console.log(Searching_data)
        let newUrl = url.concat(Searching_data);
        getData(newUrl);
    }  
    else
        alert("Hiba..")
}

