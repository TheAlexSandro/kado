onload = () => {
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
        const textElement = document.getElementById("text-section");
        setTimeout(() => {
                textElement.classList.remove("hidden")
                textElement.classList.add("text-section-animation")
        }, 6000);
});