window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    var empasis = document.createElement("em");
    var text1 = document.createTextNode("This is");
    var text2 = document.createTextNode(" my ");
    var text3 = document.createTextNode("content.");

    empasis.appendChild(text2);
    para.appendChild(text1);
    para.appendChild(empasis);
    para.appendChild(text3);
    testdiv.appendChild(para);
}