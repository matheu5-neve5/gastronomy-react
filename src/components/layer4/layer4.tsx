import style from './style.module.scss'
import logo from '../../images/logo.png'



export function Layer4() {

    return (
       
        <section className={style.mainAssets}>
            <header className={style.mainAssetsHeader}><img src={logo} alt="Logo da marca" title=""></img>
                <h1>Culinária em Tela</h1>
                <p>Aprenda a trabalhar como os maiores chefs de cozinha do mundo, dominando as mais avançadas técnicas
                    e preparando as receitas mais elaboradas da gastronomia.</p>
            
            </header>

            <div className={style.mainAssetsContent}>
                <article>
                    <h2>Curso 100% Online</h2>
                    <p>Todas as aulas são gravadas em cozinha dentro de estúdio profissional para que você tenha a
                        máxima qualidade de
                        imagem
                        e vídeo</p>
                </article>

                <article>
                    <h2>Suporte Especializado</h2>
                    <p>Este curso possui suporte diretamente com um chef da nossa equipe oficial</p>
                </article>

                <article>
                    <h2>Mais de 100 aulas divididas em 10 módulos</h2>
                    <p>A modularização que você precisa para compreender de maneira mais objetiva</p>
                </article>

                <article>
                    <h2>Certificado reconhecido em mais de 12 países</h2>
                    <p>Ao concluir o curso você terá um certificado com reconhecimento em diversos países ao redor do
                        mundo
                    </p>
                </article>
            </div>
        </section>
       
    )
}

