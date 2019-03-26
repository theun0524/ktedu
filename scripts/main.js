var button = document.getElementById('test-button');

button.addEventListener('click', function(e) {
  var form = document.getElementById("mooc");
  document.getElementById('token').value = 'rfXtRQlS/kvURh6X9gQ1sA==';
  document.getElementById('token2').value = '%EC%9E%A5%ED%9D%AC%EC%A4%80';
  //form.action="https://st-mooc-pos.xinics.kr/imoove-auth-client/km-link-integrated";
  //form.action="https://www.postechx.kr/imoove-auth-client/km-link-integrated";
  form.action="http://kt.dev.smartlearn.kr";
  form.target="_blank";
  form.submit();
});
