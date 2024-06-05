onload = () => {
        var getBersiap = document.getElementById('text-section-bersiap')
        getBersiap.classList.remove("hidden")
        getBersiap.classList.add("text-section-animation")

        setTimeout(() => {
                getBersiap.classList.add("text-section-animation-bersiap")
                document.getElementById('flower').classList.remove("container");
                setTimeout(() => {
                        var textElement = document.getElementById("text-section");
                        textElement.classList.remove("hidden")
                        textElement.classList.add("text-section-animation")
                }, 6000);
        }, 3000)
};