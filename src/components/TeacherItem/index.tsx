import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://media-exp1.licdn.com/dms/image/C5103AQFebbkP1jdaNw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=NuYoKOyx4PdaCVPf6B4a9XR9dIUGl3tKfTzXnCj_q9w" alt="Imagem-Avatar"/>
            <div>
              <strong>Morena Nobre</strong>
              <span>Illustração</span>
            </div>
          </header>

          <p>
            Apaixonada por desenhar desde seus 9 anos de idade.
            <br /><br />
            Sente-se realizada em compartilhar seu conhecimento e propagar a arte para o mundo.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 70,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp Icon"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem