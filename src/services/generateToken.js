export function generateToken(dataSend) {
    return new Promise((resolve, reject) => {
      const url = "http://yandrydev.es:3000/api/v1/generateToken";
      const {email,subject,messague}=dataSend
      const data = {
        email,
        subject,
        messague
      };
 
      
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
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
  