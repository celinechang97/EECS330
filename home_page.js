function confirm_password(){
    document.getElementById("confirm").style.display="block";
    document.getElementById("create").style.display="block";
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="none";
};

function create() {
  if (document.getElementById("password").value != document.getElementById("confirm").value) {
    alert("Passwords don't match!")
  } else {
<<<<<<< HEAD
    window.location.href = "daily.html";
=======
    window.location.href = "http://htmlpreview.github.io/?https://github.com/tommypraeger/EECS330/blob/master/daily.html";
>>>>>>> 9d482b14db365e3dcf3ebe5c37be294d5b5cd784
  }
}

function checkempty() {
  if (document.getElementById("password").value == '' && document.getElementById("confirm").value == '') {
    alert("Enter username and password")
  } else {
<<<<<<< HEAD
    window.location.href = "daily.html";
  }
}
=======
    window.location.href = "http://htmlpreview.github.io/?https://github.com/tommypraeger/EECS330/blob/master/daily.html";
  }
}

document.getElementById("confirm").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("create").click();
  }
});
>>>>>>> 9d482b14db365e3dcf3ebe5c37be294d5b5cd784
