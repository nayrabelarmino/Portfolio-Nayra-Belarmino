function fechar_modal() {
    modais.innerHTML = "  ";
}

function retrofy() {
    modais.innerHTML = `<div class="modal">
    <div class="fundo_modal">
        <div class="conteudo_modal"> 
            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1>Retrofy</h1>
                <p class="modal-p">Retrofy is a project made to represent who I am. Therefore,
                I developed a website that tells a little about the history of music during
                the 60s, 70s and 80s, which gives you music recommendations from the chosen era
                and also a Quiz to test your knowledge about the songs of the
                cited periods.<br></p>
                   <div class="tecno">
                   <img src="imgs/html-5.png" alt="" width="35px">
                  <img src="imgs/css-3.png" alt=""width="35px">
                  <img src="imgs/js.png" alt="" width="35px">
                  <img src="imgs/mysql.png" alt="" width="35px">
                  </div><br>

                   <span>Learn more about Retrofy:</span>
                    <br><br>
                    <a href="https://github.com/nayrabelarmino/Retrofy" target="_blank">
                   <button class="button-retrofy" onclick="retrofySite()">Learn more</button> </a>
            </div>
        </div>
    </div>
</div>`
}   

function hoptech() {
    modais.innerHTML = `<div class="modal">
    <div class="fundo_modal">
        <div class="conteudo_modal"> 
            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1>HopTech</h1>
                <p class="modal-p">The HopTech project came about with the initiative of the organization NextPoint,
                and it is a project whose main objective is to develop simple and
                effective for problems in hop planting.
                The objective is to help control plantations through a system of
                monitoring using sensors and dashboards for data collection and analysis.<br></p>
                <div class="tecno">
                <img src="imgs/html-5.png" alt="" width="35px">
               <img src="imgs/css-3.png" alt=""width="35px">
               <img src="imgs/js.png" alt="" width="35px">
               <img src="imgs/mysql.png" alt="" width="35px">
               </div><br>

                <span>Learn more about HopTech:</span>
                <br><br>
                <a href="https://github.com/nextpointbr/HopTech" target="_blank">
                <button class="button-retrofy" onclick="hoptechSite()">Learn more</button></a>
            </div>
        </div>
    </div>
</div>`
}