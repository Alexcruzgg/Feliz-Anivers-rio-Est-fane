function abrirSurpresa() {

    const surpresa = document.getElementById("surpresa");

    if (surpresa.style.display === "block") {
        surpresa.style.display = "none";
    } else {
        surpresa.style.display = "block";

        criarConfetes();
    }
}

function criarConfetes() {

    for (let i = 0; i < 40; i++) {

        const confete = document.createElement("div");

        confete.innerHTML = ["💜", "💗", "✨", "🎉", "🎂"][Math.floor(Math.random() * 5)];

        confete.style.position = "fixed";
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = "-30px";
        confete.style.fontSize = (15 + Math.random() * 20) + "px";
        confete.style.zIndex = "9999";
        confete.style.pointerEvents = "none";

        document.body.appendChild(confete);

        const duracao = 2 + Math.random() * 3;

        confete.animate(
            [
                { transform: "translateY(0) rotate(0deg)" },
                { transform: `translateY(110vh) rotate(360deg)` }
            ],
            {
                duration: duracao * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confete.remove();
        }, duracao * 1000);
    }
}