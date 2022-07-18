import Contas from "../data/Contas";

export default function StoryTemplate(){
    return Contas.map(props => 
        <div>
            <div className="Stories">
                <div className="story">
                        <div className="imagem">
                            <img src={props.imagem}/ >
                        </div>
                        <h3>{props.nome}</h3>
                </div>  
            </div>    
        </div>
    );
};
