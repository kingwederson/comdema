
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cab">
        <img src="https://i.imgur.com/KIqa8eh.png" class="logo">
        <nav class="titulo"><span id="hie1">COMDEMA</span><br><span id="hie2">Bom Jardim de Minas</span></nav>
        <nav id="menu">
            <ul class="menu">
                <li>Regimento Interno</li>
                <a href="#leis"><li>Leis</li></a>
                <li>Portarias</li>
                <li>Deliberações</li>
                <li>Atas</li>
                <li>Relatórios</li>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()