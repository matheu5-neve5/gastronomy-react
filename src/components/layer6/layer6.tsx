import style from './style.module.scss'
import logo2 from '../../images/logo2.png'

export function Layer6() {
    return (
        <>
            <div className={style.mainSchool}>
                <section className={style.mainSchoolContent}>
                    <header className={style.mainSchoolContentHeader}>
                        <h1>Bem vindo à Culinária em Tela</h1>
                        <p style={{ fontSize: '1.1em' }}> A sua escola de gastronomia online</p>
                    </header>

                    <div className={style.mainSchoolContentLeft}>
                        <article className={style.mainSchoolContentLeftContent}>
                            <header>
                                <p><span className={style.iconFacebook}><a href="#">Facebook</a></span>
                                    <span className={style.iconInstagram}></span><a href="#">Instagram</a> <span
                                        className={style.iconTwitter}></span><a href="#">Twitter</a></p>
                                <h2>Tudo o que você precisa para ser um chef em um só lugar</h2>
                            </header>

                            <p>Desde 2015 a Culinária em Tela vem criando os melhores cursos do mercado gastronômico,
                                entregamos ao aluno
                                conhecimento prático e testado sem enrolação. Você tem acesso a aulas com a melhor qualidade
                                e aprende com os maiores chefs do país!</p>

                            <p>Que tal estudar, e ter o certificado da escola de gastronomia eleita a melhor do Brasil com
                                reconhecimento
                                em
                                mais
                                de 12
                                países pela Latin American Quality Institute?</p>
                        </article>

                        <section className={style.mainSchoolTrophies}>
                        <header>
                            <h2>Confira nossos Prêmios</h2>
                        </header>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Qualidade e Excelência - Master Pesquisas</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Qualidade e Atendimento - Master Pesquisas</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Prêmio Diamante - Master Pesquisas</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Estrela do Sul - Master Pesquisas</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Medalha de Ouro a Excelência - LAQI</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Brazil Quality Certification - LAQI</h3>
                            </header>
                        </article>

                        <article>
                            <header>
                                <h3 className={style.iconTwitter}>Melhor Plataforma EAD - Digital Awards</h3>
                            </header>
                        </article>

                        

                    </section>
                    </div>

          
                    <div className={style.mainSchoolContentRight}>
                        <img src={logo2} alt="CookingPot Treinamentos" title="CookingPot Treinamentos"></img>
                    </div>
                </section>
                
                <article className={style.mainSchoolAddress}>
                    <header>
                        <h2 className={style.iconMap2}>Nos Encontre</h2>
                    </header>

                    <p>Rua Marquês de Caravelas, 102 - Barra - Salvador/BA - +55 71 99285-4747</p>
                </article>
            </div>
        </>
    )
}