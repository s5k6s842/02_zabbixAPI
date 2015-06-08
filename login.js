function btn_login(){

  var zabbixURL = "http://192.168.80.129/zabbix/api_jsonrpc.php"; 
  var userName  = $("#username").val();
  var userPass  = $("#password").val();

console.log("userName = " + userName);
console.log("userPass = " + userPass);

  var request = '{"jsonrpc":"2.0","method":"user.login","params":{"user":"' + userName + '","password":"' + userPass + '"},"id":1}';

console.log("request = " + request);
  
  // XMLHttpRequest オブジェクトを作成
  var xhr = new XMLHttpRequest(request);
  xhr.open("POST",zabbixURL);
  xhr.send();
console.log(xhr);
  // 出力テスト


}

