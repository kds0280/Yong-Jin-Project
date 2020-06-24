function check_blank() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (id == '') {
    alert("아이디를 입력해주세요.");
  }
  else if (name == '') {
    alert("이름을 입력해주세요.");
  }
  else if (email == '') {
    alert("이메일을 입력해주세요.");
  }
  else {
    alert("이메일로 임시 비밀번호를 보내드렸습니다.")
  }
}