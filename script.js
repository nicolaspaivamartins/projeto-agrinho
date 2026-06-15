// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("🌱 Bem-vindo ao Agro Forte & Sustentável!");
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animação dos cards ao aparecer na tela
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);
});

// Contador de visitantes (simulado)
let visitas = localStorage.getItem("visitas");

if (!visitas) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

console.log(`🚜 Visitas ao site: ${visitas}`);

// Botão de voltar ao topo
const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "12px 18px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";
btnTopo.style.background = "#2e7d32";
btnTopo.style.color = "#fff";
btnTopo.style.fontSize = "20px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";

document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
