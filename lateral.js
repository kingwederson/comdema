function laterali(){
    var lateral = window.document.getElementById('secundaria')
    var htmllateral = `
    <nav id="ligacoes"><input type="button" classe="apagar" value="X" onclick="apagar()"><br>
            <ul class="lateral"><h2>Links Institucionais</h2>
                <a href="https://www.cmbj.mg.gov.br/"><li>Poder Legislativo</li></a>
                <a href="https://www.bomjardimdeminas.mg.gov.br/"><li>Poder Executivo</li></a>
            </ul>
            <ul class="lateral"><h2>Redes Sociais</h2>
                <a href="https://www.facebook.com/agriculturapecuariaemeioambientebomjardimdeminas"><li>Facebook SM</li></a>
            </ul>
        </nav>
    `;
   lateral.innerHTML = htmllateral
}
laterali()
function apagar(){
    window.document.getElementById('ligacoes').style.display = "none"
}