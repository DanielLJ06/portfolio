  const modal   = document.getElementById('modal');
    const mImg    = document.getElementById('modalImg');
    const mTitulo = document.getElementById('modalTitulo');
    const mTexto  = document.getElementById('modalTexto');
    const mTags   = document.getElementById('modalTags');
    const mLink   = document.getElementById('modalLink');

    document.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', () => {
            mImg.src            = card.dataset.img;
            mImg.alt            = card.dataset.titulo;
            mTitulo.textContent = card.dataset.titulo;
            mTexto.textContent  = card.dataset.texto;

            mTags.innerHTML = (card.dataset.tags || '')
                .split(',')
                .filter(t => t.trim())
                .map(t => `<span class="tag">${t.trim()}</span>`)
                .join('');

            const link = card.dataset.link;
            mLink.style.display = (link && link !== '#') ? 'inline-block' : 'none';
            if (link) mLink.href = link;

            modal.classList.add('ativo');
            document.body.style.overflow = 'hidden';
        });
    });

    function fecharModal() {
        modal.classList.remove('ativo');
        document.body.style.overflow = '';
    }

    document.getElementById('modalFechar').addEventListener('click', fecharModal);
    modal.addEventListener('click', e => { if (e.target === modal) fecharModal(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('ativo')) fecharModal();
    });