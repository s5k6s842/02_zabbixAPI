function btn_login(){

  var zabbixURL = "http://192.168.1.32/zabbix/api_jsonrpc.php"; 
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
  xhr.open("POST",zabbixURL);

  xhr.setRequestHeader("Content-Type","application/json-rpc");
  xhr.send(request);

  // 出力テスト
  xhr.onreadystatechange = function (){
    switch(xhr.readyState){
      case 1:
        console.log("xhr.readyState = ",xhr.readyState);
        console.log("open() メソッドの呼び出しが完了した");
        break;
      case 2:
        console.log("xhr.readyState = ",xhr.readyState);
        console.log("レスポンスヘッダの受信が完了した")
        break;
      case 3:
        console.log("xhr.readyState = ",xhr.readyState);
        console.log("レスポンスボディを受信中（繰り返し実行される）");
        break;
      case 4:
        console.log("xhr.readyState = ",xhr.readyState);
        console.log("XHR 通信が完了した（成功失敗に関わらず）");
          var respData = JSON.parse(xhr.responseText);
        console.log(respData);
        console.log("responseText.result = ",respData.result);

console.log("----------- respData ----------");
          var xhrHost = new XMLHttpRequest();
          var requestHost = '{"jsonrpc":"2.0","method":"host.get","params":{"output":"extend"},"auth":"' + respData.result + '","id":2}';
        console.log(requestHost);
          xhrHost.open("POST",zabbixURL);
          xhrHost.setRequestHeader("Content-Type","application/json-rpc");
          xhrHost.send(requestHost);
        console.log(xhrHost);

          xhrHost.onreadystatechange = function (){
            switch(xhrHost.readyState){
              case 1:
                console.log("xhrHost.readyState = ",xhrHost.readyState);
                console.log("open() メソッドの呼び出しが完了した");
                break;
              case 2:
                console.log("xhrHost.readyState = ",xhrHost.readyState);
                console.log("レスポンスヘッダの受信が完了した")
                break;
              case 3:
                console.log("xhrHost.readyState = ",xhrHost.readyState);
                console.log("レスポンスボディを受信中（繰り返し実行される）");
                break;
              case 4:
                console.log("xhrHost.readyState = ",xhrHost.readyState);
                console.log("XHR 通信が完了した（成功失敗に関わらず）");
                  var respHost = JSON.parse(xhrHost.responseText);
                console.log(respHost);
                console.log("responseText.result = ",respHost.result);
                  var respHostNum = Object.keys(respHost.result).length;
                console.log("respHostNum = ",respHostNum);
                  var hostNameObj = respHost.result;
                  var hostName    = hostNameObj[0].name;
                console.log("hostName = ", hostName);
//                document.location = "table.html";
                break;
            };
          };

        break;

    };
  };

}

