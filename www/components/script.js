// This is a JavaScript file
window.onload = function() {

  document.querySelector("#alerta1").addEventListener("click", function() {
        function retorno() {

        }
        navigator.notification.alert("Diga olá", retorno, "Mensagem", "Beleza");
  });
  document.querySelector("#alerta2").addEventListener("click", function(){
        function verifica(buttonIndex){
          if(buttonIndex==1){
             navigator.notification.alert("Não existe cores!");
          }
          else {
              navigator.notification.alert("Só existe nescau quando botamos ele no copo");
          }
        }
        
        navigator.notification.confirm(
          "Escolha um número",
          verifica, 
          "CURISIODADES",
          ['1','2']
        )
  });
  document.querySelector("#beep").addEventListener("click", function() {
        navigator.notification.beep(2);
  });
  document.querySelector("#vibrar").addEventListener("click", function() {
      navigator.vibrate(3000);
  });
  
}