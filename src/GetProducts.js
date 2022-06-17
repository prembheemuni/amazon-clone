const axios = require("axios");


function GetProducts() {
    const options = {
        method: 'GET',
        url: 'https://amazon-data.p.rapidapi.com/asin.php',
        params: {asin: 'B07FZ8S74R', region: 'us'},
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'amazon-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error("error");
      });
}

export default GetProducts