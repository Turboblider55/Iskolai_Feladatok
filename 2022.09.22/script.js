let Calc = () =>{
    let weight = +document.getElementById("weight").value;
    let height = ((+document.getElementById("height").value)/100)**2;

    let final = (weight/height).toFixed(1);
    //console.log(weight,height)
    let label = document.getElementById("result");
    label.innerHTML = final+"<br>";

    if(final <= 18.5)
        label.innerHTML += "Alul táplált 😂";
    if(final > 18.5 && final <= 24.9 )
        label.innerHTML += "Normál testsúly 😍";
    if(final > 24.9 && final <= 29.9)
        label.innerHTML += "Túlsuly 😮";
    if(final > 29.9 && final <= 34.9)
        label.innerHTML += "Elhízás 😐";
    if(final > 35)
        label.innerHTML += "Extrém elhízás 😑";   
}
// document.getElementById("height").addEventListener("input", ()=>{
//     document.getElementById("hid").innerHTML = document.getElementById("height").value;
// })
// document.getElementById("weight").addEventListener("input", ()=>{
//     document.getElementById("wid").innerHTML = document.getElementById("weight").value;
// })

document.getElementById("height").addEventListener("input", () => {
    setBubble(document.getElementById("height"), document.getElementById("hid"));
  });
  document.getElementById("weight").addEventListener("input", () => {
    setBubble(document.getElementById("weight"), document.getElementById("wid"));
  });
  
  function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 1;
    const max = range.max ? range.max : 250;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
  
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.marginLeft = `calc(${newVal}% + (${15 - newVal * 0.5}px))`;
  }