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
  document.querySelector("#rede").addEventListener("click", function() {
    function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Tipo de conexão ' + states[networkState]);
}

checkConnection();
  });
  document.querySelector("#local").addEventListener('click', function() {
         var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Precisão: '          + position.coords.accuracy          + '\n' +
              'Precisão de altitude: ' + position.coords.altitudeAccuracy  + '\n' +
              'Cabeçalho: '           + position.coords.heading           + '\n' +
              'Velocidade: '             + position.coords.speed             + '\n' +
              'Carimbo de data e hora: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }); 
}