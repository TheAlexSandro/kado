function getParameter() {
    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var parameter = path.split('/').pop();

    return parameter;
}

function loadFlower() {
    try {
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
    } catch { }
}

onload = () => {
    var countDownDate = new Date("Jun 10, 2024 00:00:00").getTime();

    var countdownfunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var count = document.getElementById("countdown")

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
            if (getParameter() == 'flower.html') {
                window.location.href = 'index.html'
            }
        } else {
            loadFlower()
        }
        count.innerHTML = `<p>Not available until ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.</p>`;
        
        if (distance < 0) {
            clearInterval(countdownfunction);
            count.style.display = 'none'

            try {
                var cont = document.getElementById('content')
                cont.style.display = 'flex'
                cont.style.flexDirection = 'column'
                cont.style.alignItems = 'center'
                cont.style.visibility = 'visible'
            } catch { }
        }
    }, 1000);
}