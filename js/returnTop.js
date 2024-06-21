const toggleScrollTopBtn = () => {
    let scrollTopBtn = document.getElementById("returnTop");
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (scrolled > 30) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

window.addEventListener('scroll', () => {
    toggleScrollTopBtn();
});

document.getElementById("returnTop").addEventListener("click", function () {
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 200);
});