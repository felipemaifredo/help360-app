import React from "react";

import './style-FaleConosco.css'
import LogoHelp from '../../assets/imgs/help360-logo.png'

const FaleConosco = () => {
    document.title = "Help360 | Fale Conosco"

    return (
        <div id="fale-conosco">
           <div className="text-box-fale">
                <div className="box-img-fale">
                    <img src={LogoHelp} alt="Logo Help360" />
                </div>
                <h1>Você está a um passo de potencializar o trabalho da sua equipe!<br></br>Inicie já o seu teste gratuito</h1>
           </div>
           <form>
                <div className="input-box">
                    <input placeholder="Nome" name="Nome" />
                    <input placeholder="E-mail" name="E-mail" />
                    <input placeholder="Telefone" name="Telefone" />
                    <input placeholder="Empresa" name="Empresa" />
                </div>

                <button type="submit" >Iniciar Teste</button>
           </form>
        </div>
    )
}

export default FaleConosco;