import styles from "../styles/header.module.css"

export default function header() {
    return(
        <div className={styles.header}>
            <div className={styles.menu_button}>
                <a href="">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div>

            <div className={styles.logo}>
                LOGO
            </div>

            <div className={styles.search}>

                <input type="text" name="" id="" placeholder="PESQUISAR (BARBEARIAS)" className={styles.search_bar}/>

                

                
            </div>
            
            

        </div>
    );
}