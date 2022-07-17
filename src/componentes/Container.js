import Stories from "./Stories"
import Post from "./Posts"

export default function Container(){
     return (
     <div class="container">
          <div class="containerEsquerda">
               <Stories/>
               <Post/>
          </div>
     </div>     
     )        
}