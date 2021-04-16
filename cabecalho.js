
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://comdema.wederson.net.br/">
            <img src="https://i.imgur.com/KIqa8eh.png" class="logo">
            <nav class="titulo"><span id="hie1">COMDEMA</span><br><span id="hie2">Bom Jardim de Minas</span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="regimento/"><li>Regimento Interno</li></a>
                <a href="leis/"><li>Leis</li></a></a>
                <a href="portarias/"><li>Portarias</li></a>
                <a href="deliberacoes/"><li>Deliberações</li></a>
                <a href="atas/"><li>Atas</li></a>
                <a href="oficios/"><li>Ofícios</li></a>
                <a href="relatorios/"><li>Relatórios</li></a>
                <a href="noticias/"><li>Notícias</li></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()