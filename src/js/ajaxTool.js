function ajax(obj){
    let defaultObj = {
        method : "get",
        url : "#",
        params : "",
        isAsync : true
    }

    for(let key in obj){
        defaultObj[key] = obj[key]
    }

    let xhr = new XMLHttpRequest();


    let urlAndParams = defaultObj.url;
    if(defaultObj.method.toLowerCase() == "get" && defaultObj.params != ""){
        urlAndParams += `?${defaultObj.params}`;
    }
    xhr.open(defaultObj.method,urlAndParams,defaultObj.isAsync);
    
    let p = new Promise(function(resolve,reject){
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve && resolve(xhr.responseText);
                }else{
                    reject && reject(xhr.status);
                }
            }
        }

        if(defaultObj.method.toLowerCase() == "post"){
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(defaultObj.params);
        }else if(defaultObj.method.toLowerCase() == "get"){
            xhr.send();
        }

    })
    return p;
}