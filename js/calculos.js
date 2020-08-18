function Limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("valorHora").value = "";
    document.getElementById("horasTrabalhadas").value = "";
    document.getElementById("salarioBruto").value = "";
    document.getElementById("irrf").value = "";
    document.getElementById("gratificacao").value = "";
    document.getElementById("salarioLiquido").value = "";

}

function calcular (){
    

var nome = document.getElementById("nome").value;
var valorHora =  document.getElementById("valorHora").value;
var horasTrabalhadas = document.getElementById("horasTrabalhadas").value;

var salarioBruto = horasTrabalhadas * valorHora;
var gratificacao = 0;
var salarioLiquido = 0;

if(nome == "" || valorHora == "" ||horasTrabalhadas==""){
    
    $("#msg-erro").slideDown(400).delay(3000).slideUp(400);
}else{

    document.getElementById("salarioBruto").value = salarioBruto.toFixed(2);


    if(salarioBruto<=1903.98){
    document.getElementById("irrf").value = "isento";
    }else if(salarioBruto >=1903.99 && salarioBruto <= 2826.65){
    document.getElementById("irrf").value = "7,5%";
    }else if(salarioBruto >=2826.66 && salarioBruto <= 3751.05){
    document.getElementById("irrf").value = "15%";
    }else if(salarioBruto >=3751.06 && salarioBruto <= 4664.68){
    document.getElementById("irrf").value = "22.,5%";
    }else if(salarioBruto >=4664.68){
    document.getElementById("irrf").value = "27,5%";
    }
    
    if(horasTrabalhadas>=160){
        gratificacao = (salarioBruto*15)/100;
    }
    document.getElementById("gratificacao").value = gratificacao.toFixed(2);
    
    salarioLiquido = salarioBruto + gratificacao;
    document.getElementById("salarioLiquido").value = salarioLiquido.toFixed(2);
    $("#msg-sucesso").slideDown(400).delay(3000).slideUp(400);
}

}