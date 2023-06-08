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
                <p class="modal-p">A Retrofy é um projeto feito para representar quem eu sou. Sendo assim,
                   desenvolvi um site que conta um pouco sobre a história da música durante
                   os anos 60, 70 e 80, que te dá recomendações de músicas da época escolhida
                   e também um Quiz para testar o seu conhecimento acerca das músicas dos 
                   períodos citados.<br></p>
                   <div class="tecno">
                   <img src="imgs/html-5.png" alt="" width="35px">
                  <img src="imgs/css-3.png" alt=""width="35px">
                  <img src="imgs/js.png" alt="" width="35px">
                  <img src="imgs/mysql.png" alt="" width="35px">
                  </div><br>

                   <span>Conheça a Retrofy clicando aqui:</span>
                    <br><br>
                    <a href="https://github.com/nayrabelarmino/Retrofy" target="_blank">
                   <button class="button-retrofy" onclick="retrofySite()">Conhecer</button> </a>
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
                <p class="modal-p">O projeto HopTech surgiu com a iniciativa da organização NextPoint, 
                e é um projeto que tem como principal objetivo desenvolver soluções simples e 
                efetivas para problemas no plantio de lúpulo.
                O objetivo é auxiliar no controle das plantações por meio de um sistema de 
                monitoramento utilizando sensores e dashboards para coleta e análise de dados.<br></p>
                <div class="tecno">
                <img src="imgs/html-5.png" alt="" width="35px">
               <img src="imgs/css-3.png" alt=""width="35px">
               <img src="imgs/js.png" alt="" width="35px">
               <img src="imgs/mysql.png" alt="" width="35px">
               </div><br>

                <span>Conheça a HopTech clicando aqui:</span>
                <br><br>
                <a href="https://github.com/nextpointbr/HopTech" target="_blank">
                <button class="button-retrofy" onclick="hoptechSite()">Conhecer</button></a>
            </div>
        </div>
    </div>
</div>`
}