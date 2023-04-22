import { useState } from "react";
import userService from "../../services/UserService";

/**
 * 
 * @returns 
 */

export const Homepage = () => {

   // testing const to display content
   const [content, setContent] = useState();

   async function contentSet() {
      const response = await userService.getPublicContent();

      // set content to response
      setContent(response);
   }

   return (
      
      // FORM
      <div 
         className="d-flex justify-content-center" 
         style={{ marginTop: '3rem' }}
      >

         <header className="jumbotron">
            <h2>{content}</h2>
         </header>

      </div>


   );

}
