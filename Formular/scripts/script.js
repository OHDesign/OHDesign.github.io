
function focusinput(x){
    for(var i = 1; i <= 4; i++){
        document.getElementById('box'+i).style.outlineColor = 'var(--border)';
        document.getElementById('box'+i).style.backgroundColor = 'var(--description)';
    }
    if(x != 0){
        document.getElementById('box'+x).style.outlineColor = 'var(--ctaColor)';
        document.getElementById('box'+x).style.backgroundColor = 'var(--focus)';
    }
}

function isDateSelected(){ 
      var inputDate = document.getElementById('birthday').value;
      if (inputDate.value === null){
          document.getElementById('birthday').style.color = 'var(--placeholder)';
      } else if (inputDate == "") {
          document.getElementById('birthday').style.color = 'var(--placeholder)';
      } else {
          document.getElementById('birthday').style.color = 'var(--fontnormal)';
      }
  }

function validateform(){
    let username = document.getElementById("name");
    let email = document.getElementById("email");

    if (username.value == "" || email.value == ""){
        alert("Bitte Name und E-Mail eingeben.");
    }else{
        rotaterocket();
        setTimeout(launchrocket, 2000);
        setTimeout(sendform, 4000);
    }
  
}

function rotaterocket(){
    document.getElementById('rocket').style.transform = 'rotate(-45deg)';
    
}

function launchrocket(){
    document.getElementById('rocketbackground').style.height = '950px';
    document.getElementById('rocketbackground').style.top = '-900px';
}


function sendform(){
    document.getElementById("myform").submit();
}