let linksArr = document.links;

for(let i of linksArr){
    if(i == document.URL){
        i.parentElement.classList.add("active");
        i.classList.add("text-primary");
    }
}