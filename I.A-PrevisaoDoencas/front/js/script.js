

function validaForm(){
    let arrayCheckbox = document.getElementsByName('check');
    let aux = 0;
    let msg = ""
    
    for(x = 0; x<arrayCheckbox.length; x++){
        if(arrayCheckbox[aux].checked){
            msg = msg + "1,";
        }else{
            msg = msg + "0,";
        }
        
        aux = aux + 1;
    }
    
//alert(msg);
document.getElementById("mensagem").innerHTML = msg;
}



