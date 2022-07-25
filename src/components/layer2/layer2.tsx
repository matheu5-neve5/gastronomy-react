import { Articles } from './articles/articles'
import style from './style.module.scss'

export function Layer2() {
    return (

        <><section className={style.mainBlog}>
            <header className={style.mainBlogHeader}>
                <h1 className={style.iconBlog}>Nossas últimas receitas</h1>
                <p>Aqui você encontra os últimos pratos adicionados ao nosso arsenal de aulas.</p>
            </header>
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
        </section>
        
        </>
    )
}