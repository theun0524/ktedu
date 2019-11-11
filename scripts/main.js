var button = document.getElementById('test-button');

button.addEventListener('click', function(e) {
  var form = document.getElementById("mooc");
  document.getElementById('token').value = 'b7LhlGBIMQ4aULCg0t8f8w==';
  document.getElementById('token2').value = '%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%95%84%EC%9D%B4%EB%94%94%EB%94%94';
  //form.action="https://st-mooc-pos.xinics.kr/imoove-auth-client/km-link-integrated";
  //form.action="https://www.postechx.kr/imoove-auth-client/km-link-integrated";
  form.action="https://kt.dev.smartlearn.kr";
  form.target="_blank";
  form.submit();
});
