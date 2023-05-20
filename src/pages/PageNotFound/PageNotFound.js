import React from "react";

import './style-PageNotFound.css'
import { Link } from "react-router-dom";

const PageNotFound = () => {
    document.title = "Help360 | Página não encontrada!"

    return (
        <div id="PageNotFound">
           <h1>Hello World Não encontrado!</h1>

           <Link to={'/'}>Retornar a Home</Link>
        </div>
    )
}

export default PageNotFound;