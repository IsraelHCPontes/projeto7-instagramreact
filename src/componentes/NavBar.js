 export default function Navbar(props){
    return(
        <div class="topo">
            <div class="containerTopo">
                 <div class="logo-mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="topoEsquerda">
                    <ion-icon class="instagram" name="logo-instagram"></ion-icon> 
                    <img className="barra" src="./arquivosulteis/img/Rectangle 4.png"/>
                    <img className="logo" src="./arquivosulteis/img/logo 1.png" />
                </div>
                <div class="instagram-mobile">
                    <img src="./arquivosulteis/img/logo.png" />
                </div>
                <input name="nome" type="search" class="inpt" placeholder="Pesquisa"/>
                <div class="topoDireita">
                    <ion-icon class="paper" name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
        )
    }