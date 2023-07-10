const personagens = document.querySelectorAll('.character')

personagens.forEach(character => {
    character.addEventListener('mouseenter' , () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }


        const personagemSelecionado = document.querySelector('.selected');
        personagemSelecionado.classList.remove('selected');
        character.classList.add('selected');

        const imagemPersonagemGrande = document.querySelector('.big-character');

        const idPersonagem = character.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('character-name');
        nomePersonagem.innerText = character.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('character-description');
        descricaoPersonagem.innerText = character.getAttribute('data-description');







    })
})