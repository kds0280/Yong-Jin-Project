function summary_info(obj) {
  let text = document.getElementById("chage_text");
  text.innerHTML = "<p>1. 시장 분석</p> <p>2. 기술적 분석</p> <p>3. 주가 분석</p><p>4. 거래량 분석</p><p>- 거래량이란?</p> <p>- 추세와 거래량</p><p>- 패턴과 거래량</p><p>5. 5월 시장 전망과 유망종목 분석 </p>"
  obj.style.borderTop = "2px solid #ff7500";
  obj.style.fontSize = "18px";
  obj.style.fontWeight = "600";
  obj.style.color = "black"

  let other = document.getElementById("nono");
  other.style.borderTop = "1px solid #999999";
  other.style.fontSize = "16px";
  other.style.fontWeight = "500";
  other.style.color = "#999999"
}
function subscribe(obj) {
  let text = document.getElementById("chage_text");
  text.innerHTML = "구독 부탁드려요 찡긋^_^"
  obj.style.borderTop = "2px solid #ff7500";
  obj.style.borderTop = "2px solid #ff7500";
  obj.style.fontSize = "18px";
  obj.style.fontWeight = "600";
  obj.style.color = "black"


  let other = document.getElementById("no");
  other.style.borderTop = "1px solid #999999";
  other.style.fontSize = "16px";
  other.style.fontWeight = "500";
  other.style.color = "#999999"
}