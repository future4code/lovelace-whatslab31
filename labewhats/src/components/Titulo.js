import React from "react";
import styled from 'styled-components'


const TituloDoZapson = styled.div`
color: white ;
background-color: #74d600;
border: 1px solid black;
border-radius: 5px;
width: 80vW;
text-align: center;
`

function Titulo() { 
    return (
        <TituloDoZapson>
            <h1>Zapenu</h1>
        </TituloDoZapson>
    )
  }

export default Titulo