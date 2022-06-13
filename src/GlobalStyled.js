import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}

@import url('https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  body {
    margin: 0;
    padding: 0;
    
   
  
   

  }


  :root{
    --maxwidth: 1280px;
    --fontbig:1.5rem;
    --fontmed:1.3rem;
    --fontsmall:1rem;

  }

 
  a {
      text-decoration:none;
     
     
  }
  img{
    display:block;
    max-width:210px;
  max-height:470px;
    
  }
 span{
   color:red;
 }
`;

export default GlobalStyle;
