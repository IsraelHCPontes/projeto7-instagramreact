 export default function Navbar(props){
    return(
        <div class="topo">
                <div class="topoEsquerda">
                    <ion-icon class="teste" name="logo-instagram"></ion-icon> 
                    <img src="./arquivosulteis/img/Rectangle 4.png"/>
                    <img src="./arquivosulteis/img/logo 1.png" />
                </div>
                <input name="nome" type="search" class="inpt" placeholder="Pesquisa"/>
                <div class="topoDireita">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
        </div>
        )
    }