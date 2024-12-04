async function buscarDadosPerfil() {
    // Simulando a busca de dados do perfil
    return {
        foto: 'path/to/photo.jpg',
        nome: 'João da Silva',
        cargo: 'Desenvolvedor de Software',
        localizacao: 'Indaiatuba, SP',
        telefone: '123-456-7890',
        email: 'joao.silva@example.com',
        habilidades: {
            interpessoais: ['Comunicação', 'Trabalho em equipe', 'Liderança'],
            tecnicas: [
                { nome: 'JavaScript', logo: 'path/to/javascript-logo.png' },
                { nome: 'React', logo: 'path/to/react-logo.png' }
            ]
        },
        idiomas: ['Português', 'Inglês'],
        portfolio: [
            { nome: 'Projeto A', url: 'https://example.com/projeto-a', github: true },
            { nome: 'Projeto B', url: 'https://example.com/projeto-b' }
        ],
        experienciaProfissional: [
            {
                nome: 'Empresa X',
                periodo: '2020 - Presente',
                descricao: 'Desenvolvedor Front-end, trabalhando em aplicações web.'
            },
            {
                nome: 'Empresa Y',
                periodo: '2018 - 2020',
                descricao: 'Desenvolvedor Back-end, focado em APIs e microsserviços.'
            }
        ]
    };
}

function atualizarInfoPerfil(dadosPerfil) {
    const foto = document.getElementById('perfil.foto');
    if (foto) {
        foto.src = dadosPerfil.foto;
        foto.alt = dadosPerfil.nome;
    }

    const nome = document.getElementById('perfil.nome');
    if (nome) nome.innerText = dadosPerfil.nome;

    const cargo = document.getElementById('perfil.cargo');
    if (cargo) cargo.innerText = dadosPerfil.cargo;

    const localizacao = document.getElementById('perfil.localizacao');
    if (localizacao) localizacao.innerText = dadosPerfil.localizacao;

    const telefone = document.getElementById('perfil.telefone');
    if (telefone) {
        telefone.innerHTML = dadosPerfil.telefone;
        telefone.href = `tel:${dadosPerfil.telefone}`;
    }

    const email = document.getElementById('perfil.email');
    if (email) {
        email.innerHTML = dadosPerfil.email;
        email.href = `mailto:${dadosPerfil.email}`;
    }
}

function atualizarHabilidadesInterpessoais(dadosPerfil) {
    const habilidadesInterpessoais = document.getElementById('perfil.habilidades.interpessoais');
    if (habilidadesInterpessoais) {
        habilidadesInterpessoais.innerHTML = dadosPerfil.habilidades.interpessoais.map(habilidade => `<li>${habilidade}</li>`).join('');
    }
}

function atualizarHabilidadesTecnicas(dadosPerfil) {
    const habilidadesTecnicas = document.getElementById('perfil.habilidades.tecnicas');
    if (habilidadesTecnicas) {
        habilidadesTecnicas.innerHTML = dadosPerfil.habilidades.tecnicas.map(habilidade => `<li><img src="${habilidade.logo}" alt="${habilidade.nome}" title="${habilidade.nome}"></li>`).join('');
    }
}

function atualizarIdiomas(dadosPerfil) {
    const idiomas = document.getElementById('perfil.idiomas');
    if (idiomas) {
        idiomas.innerHTML = dadosPerfil.idiomas.map(idioma => `<li>${idioma}</li>`).join('');
    }
}

function atualizarPortfolio(dadosPerfil) {
    const portfolio = document.getElementById('perfil.portfolio');
    if (portfolio) {
        portfolio.innerHTML = dadosPerfil.portfolio.map(projeto => {
            return `
                <li>
                    <h3 ${projeto.github ? 'class="github"' : ''}>${projeto.nome}</h3>
                    <a href="${projeto.url}" target="_blank">${projeto.url}</a>
                </li>
            `;
        }).join('');
    }
}

function atualizarExperienciaProfissional(dadosPerfil) {
    const experienciaProfissional = document.getElementById('perfil.experienciaProfissional');
    if (experienciaProfissional) {
        experienciaProfissional.innerHTML = dadosPerfil.experienciaProfissional.map(experiencia => {
            return `
                <li>
                    <h3 class="titulo">${experiencia.nome}</h3>
                    <p class="periodo">${experiencia.periodo}</p>
                    <p>${experiencia.descricao}</p>
                </li>
            `;
        }).join('');
    }
}

// Chama todas as funções para atualizar o perfil
(async () => {
    const dadosPerfil = await buscarDadosPerfil();
    atualizarInfoPerfil(dadosPerfil);
    atualizarHabilidadesInterpessoais(dadosPerfil);
    atualizarHabilidadesTecnicas(dadosPerfil);
    atualizarIdiomas(dadosPerfil);
    atualizarPortfolio(dadosPerfil);
    atualizarExperienciaProfissional(dadosPerfil);
})();
