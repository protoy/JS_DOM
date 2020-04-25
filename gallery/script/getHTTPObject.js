function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
    return false;
    }else{
        return new XMLHttpRequest();
    }
}