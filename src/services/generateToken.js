export function generateToken() {
  return new Promise((resolve, reject) => {
    const url = "https://yandrydev.es:3000/api/v1/generateToken";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.messague);
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
