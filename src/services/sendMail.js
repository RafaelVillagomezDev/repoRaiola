


export function sendEmail(dataSend) {
    return new Promise((resolve, reject) => {
      const url = "http://yandrydev.es:3000/api/v1/send";
      const {email,subject,messague}=dataSend
      const data = {
        email,
        subject,
        messague
      };
      const secretKey=process.env.REACT_APP_PASSWORD
      
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "secret-key": secretKey
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
  