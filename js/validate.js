let myObj = [];

window.onload = function() {
  
  let form = document.querySelector('form');
  form.onsubmit = validate;
};

function validate(){  
  var ok = 0;  
  var form = document.querySelector('#myForm');
  
  if(!form.name.value){
    document.getElementById("errorName").innerHTML = "This field is required<br>";
    ok++;
  }
  else{
    document.getElementById("errorName").innerHTML = ""; 
  }

  if (!form.description.value){
    document.getElementById("errorDescription").innerHTML = "Please enter a descripion of bird sighted<br>";
    ok++;
  }
  else{
    document.getElementById("errorDescription").innerHTML = "";
  }

  if (!form.date.value){
    document.getElementById("errorDate").innerHTML = "This field is required<br>";
    ok++;
  }
  else{
    document.getElementById("errorDate").innerHTML = "";
  }
   
  if (!form.img.value){
    document.getElementById("errorImg").innerHTML = "This field is required<br>";
    ok++;
  }
  else {
    var filePath = form.img.value;
    var extension = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
    if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "webp"){
      document.getElementById("errorImg").innerHTML = "File types supported are .jpg, .jpeg, .png and .webp<br>";
      ok++;
    }
    else{
      document.getElementById("errorImg").innerHTML = "";
    }
  }

  if (!form.url.value){
    document.getElementById("errorUrl").innerHTML = "This field is required<br>";
    ok++;
  }
  else{
    var urlPath = form.url.value;
    var prefix = urlPath.split('/')[0];
    if (prefix != "https:"){
      document.getElementById("errorUrl").innerHTML = "Please enter proper format of url<br>";
      ok++;
    }
    else{
      document.getElementById("errorUrl").innerHTML = "";
    }
  }
  if (ok > 0){
    return false;
  }
  else {
   var JsonObject = {
      "name": form.name.value,
      "des": form.description.value,
      "date": form.date.value,
      "notes": form.notes.value,
      "img": form.img.value,
      "url": form.url.value,
    };
    myObj.push(JsonObject);
    var JsonObjectToString = JSON.stringify(myObj);
    localStorage.setItem("obj", JsonObjectToString);
    form.submit();
    form.reset();
    console.log(myObj);
  } 
}
 