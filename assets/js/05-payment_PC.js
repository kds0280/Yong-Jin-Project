function to_check() {
  let customer = document.getElementById("customer").value;
  let cell_phone = document.getElementById("cell_phone").value;
  let delivery_memo = document.getElementById("delivery_memo").value;
  if (customer == '') {
    alert("받으시는 분을 입력하세요");
  }
  else if (cell_phone == '') {
    alert('핸드폰 번호를 입력하세요');
  }
  else {
    location.href = href = "http://kds0280start.dothome.co.kr/06-pay_result.html"
  }
}