function aplicarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function configurarMenuResponsivo() {
    const cabecalho = document.querySelector('.cabecalho-principal');
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navegacao-principal');

    if (!cabecalho || !toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('ativo');
    });

    let ultimoScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollAtual = window.scrollY;

        if (window.innerWidth <= 1024) {
            if (scrollAtual > ultimoScroll && scrollAtual > 100) {
                cabecalho.classList.add('cabecalho-escondido');
                nav.classList.remove('ativo');
            } else {
                cabecalho.classList.remove('cabecalho-escondido');
            }
        }

        ultimoScroll = scrollAtual;
    });
}

function mostrarToast(mensagem) {
    const toast = document.createElement("div");
    toast.textContent = mensagem;

    Object.assign(toast.style, {
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#2a2a2a",
        color: "#fff",
        padding: "1em 2em",
        borderRadius: "10px",
        fontFamily: "sans-serif",
        fontSize: "1rem",
        opacity: "0",
        pointerEvents: "none",
        zIndex: "9999",
        transition: "opacity 0.4s ease"
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.pointerEvents = "auto";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 400); // Remove após a transição
    }, 4000); // Tempo de exibição do toast em milissegundos
}

function mostrarFormularioQuiz() {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');
    const escolhaQuiz = document.getElementById('escolha-quiz');
    const formConhecimento = document.getElementById('form-quiz');
    const formPersonalidade = document.getElementById('form-quiz-personalidade');
    if (tipo === 'conhecimento') {
        if (escolhaQuiz && formConhecimento) {
            escolhaQuiz.style.display = 'none';
            formConhecimento.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else if (tipo === 'personalidade') {
        if (escolhaQuiz && formPersonalidade) {
            escolhaQuiz.style.display = 'none';
            formPersonalidade.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function inicializarFuncoesGlobais() {
    aplicarScrollSuave();
    configurarMenuResponsivo();
    mostrarFormularioQuiz();
}
