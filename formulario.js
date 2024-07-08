function finalizar(){
let sugestao_avaliador = document.getElementById('sugestoes').value 
let atendido_avaliador = document.getElementById('atentimento').value 

let avaliacao = document.querySelector("input[name='avalie_nosso_atendimento']:checked").value 

alert('Muito obrigada pela avaliação: ' + avaliacao + '\n' 
+ 'Obrigada pela sugestão: ' + sugestao_avaliador + '\n' 
+ 'O garçom que te atendeu foi: ' + atendido_avaliador + '\n'
+ 'Agradecemos pela escolha de nosso restaurante!! <3')

window.location.href='index.html'

}




