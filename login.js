function btn_login(){

  var zabbixURL = "http://192.168.80.129/zabbix/api_jsonrpc.php"; 
  var userName  = $("#username").val();
  var userPass  = $("#password").val();

console.log("userName = " + userName);
console.log("userPass = " + userPass);

  var request = '{"jsonrpc":"2.0","method":"user.login","params":{"user":"' + userName + '","password":"' + userPass + '"},"id":1}';

console.log("request = " + request);


  function XMLHttpRequestCreate(){
	  try{
  		return new XMLHttpRequest();
  	}catch(e){}
  	try{
  		return new ActiveXObject('MSXML2.XMLHTTP.6.0');
  	}catch(e){}
  	try{
  		return new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }catch(e){}
  	try{
  		return new ActiveXObject('MSXML2.XMLHTTP');
  	}catch(e){}

	  return null;
  }


  var result1 = new Object();

  // XMLHttpRequest オブジェクトを作成
  var xhr = new XMLHttpRequest();
  xhr.open("POST",zabbixURL,false);

  xhr.setRequestHeader("Content-Type","application/json-rpc");

  
  xhr.onreadystatechange = function (){
    switch(xhr.readyState){
      case 1:
        console.log("open() メソッドの呼び出しが完了した");
        break;
      case 2:
        console.log("レスポンスヘッダの受信が完了した")
        break;
      case 3:
        console.log("レスポンスボディを受信中（繰り返し実行される）");
        break;
      case 4:
        console.log("XHR 通信が完了した（成功失敗に関わらず）");
        break;
    };
  };
  
  xhr.send(request);


console.log("xhr_01 = ", xhr);
console.log(xhr.readyState);
console.log(JSON.stringify(xhr.responseText));
console.log(xhr.responseText);

  // 出力テスト
  var data = JSON.parse(xhr.responseText);
console.log(data);


}

