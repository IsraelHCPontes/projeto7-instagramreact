import React from "react";
import Contas from "../data/Contas";



function Post(props){

    const [corbotao, setCorbotao] = React.useState("like");
    
    return (
        <div class="containerFeed">
            <div class="postFeed">
                <div class="topoPost">
                    <div   div class="usuario"> 
                        <img src={props.imagem}/>
                        <h3>{props.nome}</h3>
                    </div> 
                    <img src="./arquivosulteis/img/ellipsis-horizontal 1.svg" alt=""/>
                </div>
            <img class="imgPost" src={props.post} className={corbotao} onDoubleClick={()=>(Curtir(corbotao, setCorbotao))}/>
            <div class="interacaoPost">
                    <div class="intercaoPostEsquerda">
                        <ion-icon  class={corbotao} onClick={()=>(Curtir(corbotao, setCorbotao))} name={corbotao =="like" ? "heart-outline":"heart"}></ion-icon>
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


function Curtir(corbotao, setCorbotao){
        if(corbotao ==="like"){
         setCorbotao('curtido') 
        }else{
            setCorbotao('like')
        }
    }

export default function Posts(){
     return Contas.filter(props => props.post).map(props => <Post imagem={props.imagem} nome={props.nome} post={props.post}/>)
}





