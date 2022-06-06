function buscaImagem(data) {
  const apiKey = "LDIm14IbPrRf2ds6qxBsc4m7kw3NHk4NhAAHZyex";

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`,
    dataType: "json",
    success: function (dados) {
      $("#title").html(dados.title);
      $("#explanation").html(dados.explanation);
      document.getElementById("url").src = dados.url;
    },
  });
}

$("#botao").click(function (event) {
  event.preventDefault();
  let imagemDia = $("#data").val(); //pega o valor digitado na data
  buscaImagem(imagemDia);
});

// function getNasa() {
//   const requisicao = new XMLHttpRequest();
//   const myKey = 'LDIm14IbPrRf2ds6qxBsc4m7kw3NHk4NhAAHZyex';
//   requisicao.open(
//     "GET",
//     `https://api.nasa.gov/planetary/apod?api_key=${myKey}&date=2020-05-09`
//   );
//   requisicao.onload = function () {
//       if (requisicao.status == 200) {
//           response = requisicao.response;
//           let responseObj = JSON.parse(response);
//           console.log(responseObj);
//         } else{
//             console.log(`Deu algum erro de status ${requisicao.status}`);
//         }
//     };
//     requisicao.send();
// }

// getNasa();

// Generate API Key
// Your API key for kensku07@gmail.com is:

// LDIm14IbPrRf2ds6qxBsc4m7kw3NHk4NhAAHZyex
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=LDIm14IbPrRf2ds6qxBsc4m7kw3NHk4NhAAHZyex
// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

// Account Email: kensku07@gmail.com
// Account ID: ddaebf0b-3e2e-44f2-aa8c-a9660e25fbef
