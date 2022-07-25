import style from './style.module.scss'



export function Layer1() {
    return (
        <div className={style.mainCta}>
            <article className={style.mainCtaContent}>
                <div className={style.mainCtaContentSpacer}>
                    <header>
                        <h1>Aqui você aprende tudo o que é necessário para trabalhar como um cozinheiro profissional
                        </h1>
                    </header>

                    <p>Domine as mais avançadas técnicas de cozinha</p>
                    <button className={style.butn}>Saiba mais</button>


                </div>
            </article>
        </div >
    )
}