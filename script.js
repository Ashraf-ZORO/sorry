setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 2000);

function checkPassword(){
  const pass = document.getElementById("passwordInput").value;

  if(pass === "1234"){
    document.getElementById("passwordPage").classList.remove("active");
    document.getElementById("letterPage").classList.add("active");

    // 🔥 فتح الرسالة بانيميشن
    setTimeout(() => {
      document.querySelector(".letter").classList.add("open");
    }, 300);

  }else{
    document.getElementById("error").innerText = "Wrong password";
  }
}

function showVideoPage(){
  document.getElementById("letterPage").classList.remove("active");
  document.getElementById("videoPage").classList.add("active");
}
