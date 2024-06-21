const sendForm = async (formData) => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = formData;
        const headers = {
            'Content-type': 'application/json',
        }
        const fetchApi = fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        })
        fetchApi.then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    alert("Los datos han sido enviados correctamente");
                })
            }
        })
    } catch (error) {
        console.error('Error al postear los datos:', error);
    }
}