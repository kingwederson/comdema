function rodapi(){
    var rodape = window.document.getElementById('rodape')
    var htmlrodape = `
    <nav class="main" id="rodapeinfo">
        <p class="lista"><b>Disclamer</b>: Este site é apenas um repositório de informações úteis para o bom funcionamento do COMDEMA e para dar publicidade às atividades realizadas.</p>
        <p class="lista">COMDEMA, 2021.</p>
    </nav>
    `;
   rodape.innerHTML = htmlrodape
}
rodapi()