const showValue = (val) => {
    //console.log(val.value);
    document.getElementById('pontErtek').innerText = val.value;
}

let datas = {};

const getData = () =>{
    datas = {};
    let errors = [];
    console.log('Adatok ellenörzése: ');
    document.getElementById('errormsg').innerHTML = '';
    let currData = document.getElementById('name').value;
    //Checking if the name is right
    if(currData && currData.length > 2)
        datas.name = currData;
    else
        errors.push('Nem adott meg nevet, vagy nem elég hosszú a név');

    //Checking if the year of birth is right
    currData = document.getElementById('birthyear').value;
    if(currData > 1900 && currData < new Date().getFullYear()+1){
        datas.birthyear = currData;
    }
    else 
        errors.push('Nem megfelelő születési dátumot adott meg.');

    //Checking if the email is right
    currData = document.getElementById('mail').value;
    if(currData.length > 3)
        datas.mail = currData;
    else
        errors.push('Nem adott meg email címet');

    //Checking if the password is right
    currData = document.getElementById('password').value;
    if(currData.length > 6 )
        datas.password = currData;
    else
        errors.push('Nem adott meg, vagy nem elég hosszú a jelszó');
    
    //Checking if the date of birth is right
    currData = document.getElementById('birthdate').value;
    if(currData)
        datas.birthdate = currData;
    else
        errors.push('Nem adta meg a születési évét');

    datas.rangeValue = document.getElementById('range').value;
    
    datas.langs = [];
    for(let i of document.getElementsByName('nyelv')){
        if(i.checked)
            datas.langs.push(i.value);
    }
    
    if(datas.langs.length == 0){
        errors.push("Nem választott ki semmilyen nyelvtudást.");
    }

    let vegzettsegArr = document.getElementsByName('vegzettseg');
    for(let i of vegzettsegArr){
        if(i.checked)
        datas.schoolLevel = i.value;
    }

    if(!datas.schoolLevel)
        errors.push('Nem válaszott ki iskolai végzettséget!');

    if(document.getElementById('agazat').value != '0')
        datas.agazat = document.getElementById('agazat').value;
    else
        errors.push('Nem választottál ágazatot!');

    
    if(errors.length == 0){
        document.getElementById('errormsg').innerHTML = 'Sikeres adatmentés';
        console.log(datas)
    }
    else{
        console.log('Néhány adat nem felel meg a követeményeknek.');
        let strUL = '<ul>'
        for(let i of errors){
            //document.getElementById('errormsg').innerHTML += i+"<br>";
            strUL += `<li>${i}</li>`
        }
        strUL += '</ul>'
        document.getElementById('errormsg').innerHTML = strUL;
    }
}