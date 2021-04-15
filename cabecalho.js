
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cab">
        <a href="http://comdema.wederson.net.br/">
            <img src="https://i.imgur.com/KIqa8eh.png" class="logo">
            <nav class="titulo"><span id="hie1">COMDEMA</span><br><span id="hie2">Bom Jardim de Minas</span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="http://comdema.wederson.net.br/regimento/"><li>Regimento Interno</li></a>
                <a href="http://comdema.wederson.net.br/leis/"><li>Leis</li></a></a>
                <a href="http://comdema.wederson.net.br/portarias/"><li>Portarias</li></a>
                <a href="http://comdema.wederson.net.br/deliberacoes/"><li>Deliberações</li></a>
                <a href="http://comdema.wederson.net.br/atas/"><li>Atas</li></a>
                <a href="http://comdema.wederson.net.br/relatorios/"><li>Relatórios</li></a>
                <a href="http://comdema.wederson.net.br/noticias/"><li>Notícias</li></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()