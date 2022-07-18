import React from "react";
import Contas from "../data/Contas";



export default function Post(){
    const[corBotao, setCorBotao] = React.useState("like")
    
    return Contas.filter(props => props.post).map(props => 
        <div class="containerFeed">
            <div class="postFeed">
                <div class="topoPost">
                    <div   div class="usuario"> 
                        <img src={props.imagem}/>
                        <h3>{props.nome}</h3>
                    </div> 
                    <img src="./arquivosulteis/img/ellipsis-horizontal 1.svg" alt=""/>
                </div>
            <img class="imgPost" src={props.post} className={corBotao} onClick={() => {
                            if(corBotao ==="like"){
                             setCorBotao('curtido') 
                            }else{
                                setCorBotao('like')
                            }}}/>
            <div class="interacaoPost">
                    <div class="intercaoPostEsquerda">
                        <ion-icon  class={corBotao} onClick={() => {
                            if(corBotao ==="like"){
                             setCorBotao('curtido') 
                            }else{
                                setCorBotao('like')
                            }}} name={corBotao =="like" ? "heart-outline":"heart"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon  name="paper-plane-outline"></ion-icon>
                    </div>
                    <img src="./arquivosulteis/img/etiqueta.svg" alt=""/>
            </div>
                <div class="curtidasPost">
                        <img src="./arquivosulteis/img/respondeai.svg" alt=""/>
                        <h3>Curtido por <span>adorable_animals</span> e <span>outras 99.159 pessoas</span></h3>
                </div>
            </div>
        </div> 
        );
};



