document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault()
    let valid = true;

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const nameRegex = /[^a-zA-Z\s*]/;

    const name = event.target.name.value;
    const email = event.target.email.value;
    const checkBox = document.getElementById("form-checkbox");

    const nameErrorMessage = document.getElementById('nameErrorMessage');
    const emailErrorMessage = document.getElementById('emailErrorMessage');
    const checkBoxErrorMessage = document.getElementById('checkBoxErrorMessage');

    if (validateFrom(name, nameRegex) == 1) {
        nameErrorMessage.textContent = 'Nombre requerido';
        nameErrorMessage.style.display = 'block';
        valid = false;
    } else if (validateFrom(name, nameRegex) == 2) {
        nameErrorMessage.style.display = 'none';
    } else if (validateFrom(name, nameRegex) == 3) {
        nameErrorMessage.textContent = 'El nombre solo puede tener letras';
        nameErrorMessage.style.display = 'block';
        valid = false;
    }

    if (validateFrom(email, emailRegex) == 1) {
        emailErrorMessage.textContent = 'Correo electronico requerido';
        emailErrorMessage.style.display = 'block';
        valid = false;
    } else if (validateFrom(email, emailRegex) == 2) {
        emailErrorMessage.textContent = 'Correo electronico no valido';
        emailErrorMessage.style.display = 'block';
        valid = false;
    } else if (validateFrom(email, emailRegex) == 3) {
        emailErrorMessage.style.display = 'none';
    }

    if (!checkBox.checked) {
        checkBoxErrorMessage.textContent = 'El checkbox tiene que estar seleccionado';
        checkBoxErrorMessage.style.display = 'block';
        valid = false;
    } else {
        checkBoxErrorMessage.style.display = 'none';
    }

    if (valid) {
        const formData = {
            "name": name,
            "email": email,
        };

        await sendForm(formData);

        event.target.name.value = '';
        event.target.email.value = '';
    }
})

function validateFrom(value, regex) {
    if (!value) {
        return 1;
    } else if (!regex.test(value)) {
        return 2;
    } else {
        return 3;
    }
}

async function sendForm(formData) {
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
                alert("Los datos han sido enviados correctamente")
            })
        }
    })
}