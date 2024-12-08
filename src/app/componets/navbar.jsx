import styles from "../styles/navbar.module.css"

export default function navbar() {
  
  return(
      <div className={styles.barra_lateral}>
        <div className={styles.cadastre_se}>
              <a href="register"><p>Cadastre-se</p> </a>
            </div>
          <div className={styles.barra_tarefas}>
            <div className={styles.inicio}> 
              <a href="dashboard"><p>Início</p></a>
            </div>

            <div className={styles.categorias}>
              <a href="#"><p>Categorias</p></a>
            </div>

            <div className={styles.quem_somos}>
              <a href="about-us"><p>Quem somos</p></a>
            </div>

            <div className={styles.cadastrar_empresa}>
              <a href="#"><p>Cadastre sua Empresa</p></a>
            </div>

          </div>

          <div className={styles.linha}></div>

          <div className={styles.anuncio}></div>
      </div>
  );
}
