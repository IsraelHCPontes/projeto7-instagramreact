import Stories from "./Stories"
import Posts from "./Posts"
import SidBar from "./SideBar"

export default function Container(){
     return (
     <div class="container">
          <div class="containerEsquerda">
               <Stories/>
               <Posts/>
          </div>
        <div class="sideBar">
          <SidBar/>
        </div>
     </div>     
     )        
}