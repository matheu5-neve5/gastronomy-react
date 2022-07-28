import style from './style.module.scss'

export function Layer7() {

    return(

        <div className="tutor-screen">
        <section className="main-tutor">
            <div className="main-tutor-content">
                <header>
                    <h1>Conheça Matheus Neves, seu tutor nesse curso</h1>
                    <p>Eu vou te ajudar a se tornar um cozinheiro habilidoso</p>
                </header>

                <div className="main-tutor-content-img"> <img src="./_img/matheusneves.jpg" alt="Imagem do tutor"
                        title="Imagem do tutor"></img> </div>

                <article className="main-tutor-content-history">
                    <header>
                        <h2>Formado em Gastronomia e apaixonado por educação</h2>
                    </header>

                    <p>Como muitos, comecei a cozinhar como um hobby! Com o tempo, o amor pela culinária
                        foi
                        crescendo a ponto de tomar como profissão e me especializar na área. Hoje, com a bagagem que
                        tenho,
                        compartilho meu conhecimento com todos os alunos da Cooking Pot</p>
                </article>


                <section className="main-tutor-socialmedia">
                    <header>
                        <h2>Me siga nas redes sociais</h2>
                    </header>

                    <article>
                        <header>
                            <h3><a className="icon-facebook" href="#">Meu Facebook</a></h3>
                        </header>
                    </article>

                    <article>
                        <header>
                            <h3><a className="icon-facebook2" href="#">Minha fanpage</a></h3>
                        </header>
                    </article>


                    <article>
                        <header>
                            <h3><a className="icon-google" href="#">Meu Google+</a></h3>
                        </header>
                    </article>


                    <article>
                        <header>
                            <h3><a className="icon-instagram" href="#">Meu Instagram</a></h3>
                        </header>
                    </article>

                </section>
                </div>
        </section>
       </div>
    )
}