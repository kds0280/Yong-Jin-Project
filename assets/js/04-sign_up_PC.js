function to_check() {
  let id = document.getElementById("id").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let check_password = document.getElementById("check_password").value;
  let cell_phone = document.getElementById("cell_phone").value;
  if (id == '') {
    alert("아이디를 입력하세요")
  }
  else if (email == '') {
    alert("이메일을 입력하세요")
  }
  else if (password == '') {
    alert("비밀번호를 입력하세요")
  }
  else if (check_password == '') {
    alert("비밀번호 확인을 입력하세요")
  }
  else if (cell_phone == '') {
    alert("핸드폰 번호를 입력하세요")
  }
  else if (password != check_password) {
    alert("비밀번호가 틀립니다. 다시 확인해주세요");
  }
  else {
    location.href = "http://kds0280start.dothome.co.kr/01-main.html"
  }
}
