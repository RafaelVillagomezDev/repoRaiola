export function sendEmail(token, formData) {
  return new Promise((resolve, reject) => {
    const url = "https://yandrydev.es:3000/api/v1/send";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessages = response.errors.map((error) => error.msg);
          const concatenatedMessages = errorMessages.join(",  ");
          throw new Error(concatenatedMessages);
        }
        return response.json();
      })
      .then((response) => {
        resolve(response); // Resuelve la promesa con la respuesta
      })
      .catch((error) => {
        reject(error); // Rechaza la promesa con el error
      });
  });
}
