import Stories from "./Stories"
import Post from "./Posts"
import SidBar from "./SideBar"

export default function Container(){
     return (
     <div class="container">
          <div class="containerEsquerda">
               <Stories/>
               <Post/>
          </div>
        <div class="sideBar">
          <SidBar/>
        </div>
     </div>     
     )        
}