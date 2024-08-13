export function sendEmail(token) {
    return new Promise((resolve, reject) => {
      const url = "https://yandrydev.es:3000/api/v1/send";
     
      
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "secret-key": token.token
        },
      })
        .then((response) => {
          if (!response.ok) {
            const errorMessages = response.errors.map(error => error.msg);
            const concatenatedMessages = errorMessages.join(',  ');
            throw new Error(concatenatedMessages);
          }
          return res.json();
        })
        .then((response) => {
        
          resolve(response); // Resuelve la promesa con la respuesta
        })
        .catch((error) => {
         
          reject(error); // Rechaza la promesa con el error
        });
    });
  }
  