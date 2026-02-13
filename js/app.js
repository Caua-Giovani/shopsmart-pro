const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')

const resultado = document.getElementById('resultado')


function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `; 
        v1.focus()
        

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Total da Compra</h1>
            <p>Na sua compra existem ${v2} itens de ${v1}</p> 
            <strong>Sua compra ficou um total de: <span>R$ ${v1 * v2}</span></strong>
        `; 
    };

};
function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `; 
        v1.focus()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `
            <h1>Desconto Aplicado</h1>
            <p>Foi aplicado um desconto de ${v2}% sobre o valor de R$${v1}. </p> 
            <strong>Valor final com desconto: <span>R$ ${v1-([v1 * v2]/100)}</span></strong>

        `; 
    };
};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `; 
        v1.focus()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <h1>Juros Aplicado</h1>
            <p>Foi aplicado um juros de ${v2}% sobre o valor de R$${v1}. </p> 
            <strong>Valor final com juros: <span>R$ ${v1+([v1 * v2]/100)}</span></strong>
        `; 
    };
};
function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `; 
        v1.focus()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `    
            <h1>Comissão Calculada</h1>
            <p>Comissão de ${v2}% sobre uma venda de R$${v1}. </p> 
            <strong>Valor da comissão: <span>R$ ${(v1 * v2)/100}</span></strong>
        `; 
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){

        resultado.style.display='flex'
         resultado.innerHTML=
         `  <h1>Erro na validação</h1>
            <p>Por favor, informe valores numéricos válidos nos dois campos.</p> 
        `; 
        v1.focus()

    } else{
         resultado.style.display='flex'
         resultado.innerHTML=
         `      
            <h1>Lucro Obtido</h1>
            <p>Preço de venda R$${v1} | Custo: R$${v2}. </p> 
            <strong>Resultado financeiro: <span>R$ ${v1-v2}</span></strong>
        `; 
    };
};
function limpar(){
    resultado.style.display='none';
    input01.value = '';
    input02.value = '';
    
    input01.focus();
};