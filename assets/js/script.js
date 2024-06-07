function getParameter() {
    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var parameter = path.split('/').pop();

    return parameter;
}

function loadFlower() {
    try {
        document.title = 'Selamat Ulang Tahun!'
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

async function getServerTime() {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/GMT');
    const data = await response.json();
    //alert(`${data.datetime}\n\n${new Date(data.datetime)}\n\n${new Date(data.datetime).getTime()}`)
    return new Date(data.datetime).getTime();
}

onload = async () => {
    var birthday = true

    if (birthday == true) {
        var countDownDate = new Date("Jun 10, 2024 00:00:00").getTime();
        var serverTime = await getServerTime();
        var initialClientTime = new Date().getTime();

        var countdownfunction = setInterval(function () {
            var now = new Date().getTime();
            var elapsedTime = now - initialClientTime;
            var adjustedServerTime = serverTime + elapsedTime;
            var distance = countDownDate - adjustedServerTime;
            var count = document.getElementById("countdown")

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance > 0) {
                if (getParameter() !== 'index.html') {
                    window.location.href = 'index.html'
                }
            } else {
                loadFlower()
            }
            if (days == 0 && hours == 0 && minutes == 0 && seconds <= 10) {
                count.innerHTML = `<p>${seconds}</p>`;
            } else {
                count.innerHTML = `<p style="font-size: 25px;">Not available until ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.</p>`;
            }

            if (distance <= 0) {
                clearInterval(countdownfunction);
                count.style.display = 'none'
                document.title = 'Sebuah Hadiah'

                try {
                    var cont = document.getElementById('content')
                    cont.style.display = 'flex'
                    cont.style.flexDirection = 'column'
                    cont.style.alignItems = 'center'
                    cont.style.visibility = 'visible'
                } catch { }
            }
        }, 1000);
    } else {
        if (getParameter() !== 'index.html') {
            document.title = 'closed page'
            window.location.href = 'index.html'
        } else {
            document.title = 'closed'
            document.getElementById('countdown').innerHTML = `<p>Not available unless someone's birthday.</p>`
        }
    }
}