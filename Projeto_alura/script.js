function exibirCriptografia() {
    var textarea = document.getElementById('area_texto');
    var resultadoTexto = document.getElementById('resultado-texto');
    var resultadoDiv = document.querySelector('.resultado-criptografado');
    var conteudoCentralizado = document.querySelector('.conteudo-centralizado');

    var textinho = textarea.value;
    var arr = Array.from(textinho);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'a') {
            arr[i] = 'ai';
        }
        if (arr[i] == 'e') {
            arr[i] = 'enter';
        }
        if (arr[i] == 'i') {
            arr[i] = 'imes';
        }
        if (arr[i] == 'o') {
            arr[i] = 'ober';
        }
        if (arr[i] == 'u') {
            arr[i] = 'ufat';
        }
    }

    var resultadoCriptografado = arr.join('');
    resultadoTexto.textContent = resultadoCriptografado;

    textarea.value = '';
   
    resultadoDiv.style.display = 'flex'; 
    conteudoCentralizado.style.display = 'none';
}

function exibirDescriptografia() {

    var textarea = document.getElementById('area_texto');
    var resultadoTexto = document.getElementById('resultado-texto');
    var resultadoDiv = document.querySelector('.resultado-criptografado');
    var conteudoCentralizado = document.querySelector('.conteudo-centralizado');

    var textinho = textarea.value;
    
    
    textinho = textinho.replace(/ufat/g, 'u');
    textinho = textinho.replace(/ober/g, 'o');
    textinho = textinho.replace(/imes/g, 'i');
    textinho = textinho.replace(/enter/g, 'e');
    textinho = textinho.replace(/ai/g, 'a');

    resultadoTexto.textContent = textinho;
    textarea.value = '';
    
    resultadoDiv.style.display = 'flex'; 
    conteudoCentralizado.style.display = 'none';

}

function copiarTexto() {
    let copyText = document.querySelector("#resultado-texto");
    let texto = copyText.textContent || copyText.innerText; 
    
    let tempInput = document.createElement("textarea"); 
    tempInput.value = texto; 
    document.body.appendChild(tempInput); 
    tempInput.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempInput); 

    copyText.textContent = ""; 
    document.querySelector("#resultado-texto").textContent = "Nenhuma mensagem encontrada!"; 

}

function validarCorrecao() {
    const textarea = document.getElementById('area_texto');
    const buttonCriptografar = document.getElementById('button_criptografar');
    const avisoCorrecao = document.querySelector('.icone-correcao');
    const imagemIcone = document.querySelector('.img_icone');
    const value = textarea.value;

    const containsAcentos = /[À-ÿ]/.test(value);
    const containsMaiusculas = /[A-Z]/.test(value);
    
    buttonCriptografar.disabled = containsAcentos || containsMaiusculas;
    avisoCorrecao.classList.toggle('erro', containsAcentos || containsMaiusculas);

    imagemIcone.classList.toggle('erro', containsAcentos || containsMaiusculas);
}
 