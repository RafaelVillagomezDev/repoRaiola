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
        .then((res) => {
          if (!res.ok) {
            throw new Error("La respuesta de la red no fue exitosa");
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
  