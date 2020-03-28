import React from 'react'


import './styles.css'
import logoImg from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
export default function Register() {


    return (
        <div className="register-container">

            <div className="register-content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link classkName="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
                </section>

                <form>
                    <input placeholder="Nome da Ong"/>
                    <input type="email "placeholder="E-mail"/>
                    <input placeholder="whatsapp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width: 80}} />
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>


    );
}