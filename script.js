const presentes = [
    { 
        nome: "Kit Jardinagem Delicado 🌿", 
        descricao: "Conjunto de ferramentas românticas para seu amor por plantas", 
        imagem: "https://exemplo.com/kit-jardinagem.jpg", 
        link: "https://shopee.com.br/kit-jardinagem"
    },
    { 
        nome: "Vestido Delicado 👗", 
        descricao: "Vestido bem delicadinho", 
        imagem: `${'./assets/vestid.png'}`, 
        link: "https://br.shein.com/goods-p-7892002.html?goods_id=7892002&test=5051&url_from=shein_google_bradplaPT_GPM_TOP_20240618&scene=1&pf=google&ad_type=DPA&language=en&siteuid=br&landing_page_id=1510&ad_test_id=3600&requestId=olw-4asm5mhicveq&gad_source=1&skucode=I4trinud21q5&onelink=0/googlefeed_br&gclid=CjwKCAiApsm7BhBZEiwAvIu2X5vxziF2foqgk-pinmwx9OQLu4qHVoeTz-LAf6wMFFP8cK6hsXqUCRoCUUIQAvD_BwE&gbraid=0AAAAADm0yO4OdFdRtlc7hlE6GtY3skwuX&currency=BRL&lang=pt&cid=20575000940"
    },
    { 
        nome: "Luminária de Suculentas 🌵", 
        descricao: "Decoração moderna que une plantas e iluminação", 
        imagem: "https://exemplo.com/luminaria-suculentas.jpg", 
        link: "https://shopee.com.br/luminaria-plantas"
    },
    { 
        nome: "Caneca de Gatinhos 🐈", 
        descricao: "Gatiiiiiinhos, Miau", 
        imagem: `${'./assets/caneca_gatinhos.jpeg'}`,  
        link: "https://shopee.com.br/product/396270295/6085073006?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWVp3RFo3Mkw5czd4Z0hzdEF1WVFibWJPb0x3RXdVVFJBSEREVVAxUmM1OWptWnZRYUVnQXlWc284ZnUvTEFQUXdMaWJtakZMMVY3UmQxQkZCOWZLNGI5OWVTWkRBOXZyc2hETmhWcms0LzU"
    },
    { 
        nome: "Experiência Romântica 💖", 
        descricao: "Dia completo personalizado com atividades que ela ama", 
        imagem: `${'./assets/casal.jpg'}`, 
        link: ""
    },
    { 
        nome: "Kit Autocuidado Delicado 💆‍♀️", 
        descricao: "Conjunto de produtos para relaxamento e bem-estar", 
        imagem: "https://exemplo.com/kit-autocuidado.jpg", 
        link: "https://shopee.com.br/kit-autocuidado"
    },
    { 
        nome: "Certificado de Namorada Oficial 🤪", 
        descricao: "Documento hilário declarando seu amor oficial", 
        imagem: "https://exemplo.com/certificado-namorada.jpg", 
        link: "https://shein.com/certificado-namorada"
    }
];


function girarRoleta() {
    const roleta = document.getElementById('roleta');
    const botaoGirar = document.getElementById('botao-girar');
    
    // Desativa botão durante giro
    botaoGirar.disabled = true;
    botaoGirar.classList.add('opacity-50', 'cursor-not-allowed');

    // Gera rotação aleatória com mais de 2 voltas
    const totalRotation = Math.floor(Math.random() * 360) + 720; 
    
    // Efeito de desaceleração gradual
    roleta.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)';
    roleta.style.transform = `rotate(${totalRotation}deg)`;
    
    // Seleciona resultado após giro
    setTimeout(() => {
        roleta.style.transition = 'none';
        const selectedSector = calcularSetorSelecionado(totalRotation);
        mostrarPresente(selectedSector);

        // Reativa botão
        botaoGirar.disabled = false;
        botaoGirar.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 4000);
}

function calcularSetorSelecionado(rotation) {
    const normalizedRotation = rotation % 360;
    return Math.floor(normalizedRotation / 45);
}

function dispararConfetes() {
    // Verifica se a biblioteca está carregada
    if (typeof confetti !== 'undefined') {
        // Explosão central
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: [
                '#ff0a54', '#ff477e', '#ff7096', 
                '#ff85a2', '#fbb1bd', '#f9bec7',
                '#daa520', '#00ffff', '#1e90ff'
            ]
        });

        // Explosões laterais
        setTimeout(() => {
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 300);
    }
}

function mostrarPresente(indiceSector) {
    const presenteElement = document.getElementById('presente');
    const presenteSelecionado = presentes[indiceSector];

    // Preenche detalhes do presente
    document.getElementById('nome').textContent = presenteSelecionado.nome;
    document.getElementById('descricao').textContent = presenteSelecionado.descricao;
    document.getElementById('imagem').src = presenteSelecionado.imagem;
    document.getElementById('link').href = presenteSelecionado.link;

    // Remove classe hidden e adiciona animações
    presenteElement.classList.remove('hidden');
    presenteElement.classList.add('animate-bounce');

    // Dispara confetes
    dispararConfetes();
}

// Adiciona evento de clique
document.getElementById('botao-girar').addEventListener('click', girarRoleta);
