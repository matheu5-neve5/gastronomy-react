import style from './style.module.scss'

export function Layer3() {

    return (
        <>

            <article className={style.mainOptin}>
                <div className={style.mainOptinContent}>
                    <header>
                        <h1>Quer receber todas as novidades diretamente no seu e-mail?</h1>
                        <p>Informe seu nome e e-mail no campo ao lado e clique em Ok!</p>
                    </header>

                    <form>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            id="optinTyped"
                        ></input>
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            id="emailTyped"
                        ></input>

                        <button type="submit">Ok!</button>
                    </form>
                </div>
            </article>

        </>
    )
}