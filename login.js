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

  // XMLHttpRequest オブジェクトを作成
  var xhr = new XMLHttpRequest();
  xhr.open("POST",zabbixURL);
  xhr.setRequestHeader("Content-Type","application/json-rpc");
  xhr.send(request);
console.log(xhr);
console.dir(xhr);
console.log(xhr.readyState);
console.log(JSON.stringify(xhr.responseText));

  var result_1 = new Object();
  var result_1 = xhr.response;
console.log("result_1 = ", result_1);

//  var result_2 = new Object();
  var result_2 = xhr.responseText;
console.log("result_2 = ", result_2);

  var result_3 = JSON.parse(xhr.responseText);
console.log("result_3 = " + result_3);

  // 出力テスト


}

