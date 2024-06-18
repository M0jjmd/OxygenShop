const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const popupForm = document.getElementById("popup-form");

setTimeout(showPopup, 5000);

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (scrolled > 25) {
        showPopup();
    }
});

window.onclick = function (event) {
    if (event.target == modal) {
        closeAndRemember();
    }
};

function showPopup() {
    if (!localStorage.getItem("popupClosed")) {
        popup.style.display = 'block';
    }
}

function closePop() {
    popup.style.display = 'none';
    localStorage.setItem('popupClosed', true);
}

window.onclick = function (event) {
    if (event.target == popup) {
        closePop();
    }
};

document.onkeydown = function (event) {
    if (event.key === 'Escape') {
        closePop();
    }
};

closePopup.addEventListener('click', () => {
    closePop();
})

document.getElementById("popupForm").addEventListener("submit", (event) => {
    event.preventDefault()

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const email = event.target.email.value;

    if (email) {
        if (emailRegex.test(email)) {
            const formData = {
                "email": email,
            };
            sendForm(formData);
        } else {
            console.log("Introduzca el correo correctamente.");
        }
    } else {
        console.log("Introduzca un correo.");
    }
})

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
                alert("Te has registrado en la newsletter correctamente")
            })
            closePop();
        }
    })
}
