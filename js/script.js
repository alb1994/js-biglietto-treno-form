
let button = document.getElementById("bottone");
button.addEventListener("click", function(){
    let input_km = parseInt(document.getElementById("km").value);
    let input_age = parseInt(document.getElementById("age").value);
    let input_name = (document.getElementById("nome").value);

    let costo_km = input_km * 0.21;

    if(input_age === 0) {
       costo_km*= 0.8;
    }
    else if(input_age === 1) {
       costo_km *= 1;
    }
    else if(input_age === 2){
       costo_km  *= 0.6;
        
    }
    
    let risultato = costo_km.toFixed(2);
    document.getElementById("risultato_tot").innerHTML = risultato +"€";
    document.getElementById("id_nome").innerHTML = input_name;
})
document.getElementById("bottone_reset").addEventListener("click", function(){
      document.getElementById("risultato_tot").innerHTML = "";
      document.getElementById("id_nome").innerHTML = "";
})