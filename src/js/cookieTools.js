//封装cookie操作

//增加
function addCookie(key,value,count){
    let d = new Date();
    d.setDate(d.getDate()+count);
    document.cookie = `${key}=${escape(value)};expires=${d.toGMTString()}`;
}

//查（获取）
function getCookie(key){
    let str = unescape(document.cookie);
    let arr = str.split("; ");
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i].indexOf(key+"=") == 0){
            // let [,value] = arr[i].split("=");
            return arr[i].split("=")[1];
        }
    }
    return null;
}

//删除
function removeCookie(key){
    addCookie(key,"byebye",-1);
}

//修改
function updateCookie(key,value,count){
    addCookie(key,value,count);
}