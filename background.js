chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){

/*https://developer.chrome.com/extensions/xhr#extension-origin
https://developer.chrome.com/extensions/runtime#event-onMessage
https://developer.chrome.com/extensions/runtime#method-sendMessage*/

	if(request.action == "xhttp"){
		var xhttp = new XMLHttpRequest();
		xhttp.onload = function(){
			var response = xhttp.responseText;
			sendResponse(response);
		};

		//initializing request
		xhttp.open(request.method, request.url, true);
		if(request.method == "POST"){
			//maybe can get rid of this line?
			xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			
		}
		//send request
		xhttp.send(request.data);
		return true;
	}
});