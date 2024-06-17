window.addEventListener('scroll', () => {
    toggleScrollTopBtn();
});

function toggleScrollTopBtn() {
    let scrollTopBtn = document.getElementById("returnTop");
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (scrolled > 30) {
        console.log("so entra")
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

document.getElementById("returnTop").addEventListener("click", function () {
    console.log("test button")
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 2000);
});