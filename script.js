const music =
document.getElementById("bgMusic");

function checkPassword(){

  const password =
  document.getElementById("passwordInput").value;

  if(password === "Alaa"){

    document.getElementById("page1")
    .classList.remove("show");

    document.getElementById("page2")
    .classList.add("show");

    music.play();

  }else{

    document.getElementById("error").innerText =
    "Wrong Password ❤️";

  }

}

function openVideoPage(){

  document.getElementById("page2")
  .classList.remove("show");

  document.getElementById("page3")
  .classList.add("show");

}
