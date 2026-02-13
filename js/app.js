const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')

const resultado = document.getElementById('resultado')


function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `
            <p>O valor total a ser pago é de <span>R$ ${v1 * v2}</span></p>
        `; 
    };

};
function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `     
            <p>O valor total com desconto aplicado de ${v2}% a ser pago é de <span>R$ ${v1-([v1 * v2]/100)}</span></p>
        `; 
    };
};
function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <p>O valor total com juros de ${v2}% a ser pago é de <span>R$ ${v1+([v1 * v2]/100)}</span></p>
        `; 
    };
};
function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `    
            <p>O valor total da comissao de ${v2}% recebida pelo produto de preço R$${v1} é de <span>R$ ${(v1 * v2)/100}</span></p>
        `; 
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <p>O lucro gerado na venda do produto de preço R$${v1} com o custo de produção de R$${v2} foi de <span>R$ ${v1 - v2}</span></p>
        `; 
    };
};
function limpar(){
    resultado.style.display='none';
    input01.value = '';
    input02.value = '';
    
    input01.focus();
};