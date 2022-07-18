import Contas from "../data/Contas";

export default function Post(){
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
            <img class="imgPost" src={props.post}alt=""/>
            <div class="interacaoPost">
                    <div class="intercaoPostEsquerda">
                        <img src="./arquivosulteis/img/heart-outline 1.png" alt=""/>
                        <img src="./arquivosulteis/img/Vector.svg" alt=""/>
                        <img src="./arquivosulteis/img/paper-plane-outline 1.png" alt=""/>
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