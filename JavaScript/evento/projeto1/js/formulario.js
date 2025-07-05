(function () {
    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const fromCadastro = document.querySelector(".fromCadastro")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength

    fromCadastro.addEventListener("submit", function (e) {
        if (!txtTitulo.value) {
            showErrorMessage("O campo título é obrigatório.", function () {
                txtTitulo.focus()
            });
            e.preventDefault();
        }
    })

    function showErrorMessage(message, callback) {
        feedbackMessage.classList.add("show")
        feedbackMessage.querySelector("p")[0].textContent = message
        feedbackMessageCloseBtn.focus()

        function hideMessage() {
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboradOnBtn)
            if (typeof callback === "function") {
                callback()
            }
        }

        function pressedKeyboradOnBtn(e) {
            if (e.keyCode == 27) {
                hideMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener("click", hideMessage)
        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboradOnBtn)
    }

    mostrarNumero(maxima)
    contadorContainer.style.display = "block"
    function checkLenghth(){
        let numeroLetraDigitada = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetraDigitada)
        mostrarNumero(caracteresRestantes)
    }

    function mostrarNumero(numero) {
        resta.textContent = numero
    }

    txtDescricao.addEventListener("input", checkLenghth)
    btn.disable = true
    chkAceito.addEventListener("change", function () {
        btn.disabled = !this.checked
    })
})()