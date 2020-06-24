function check_blank() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;

  if (id == '') {
    alert("아이디를 입력해주세요");
  }
  else if (password == '') {
    alert("비밀번호를 입력해주세요");
  }
  else {
    location.href = "http://kds0280start.dothome.co.kr/01-main.html";
  }
}