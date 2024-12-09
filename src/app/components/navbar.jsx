import styles from "../styles/navbar.module.css"

export default function navbar() {
  
  return(
    <div className={styles.barra_lateral}>
    <div className={styles.barra_tarefas}>
      
      <div className={styles.cadastre_se}>
          
        
        <p /* usamos '★' para simular a logo de cada div que sera adicionada em alteracoes futuras */
        >★ Cadastre-se</p>
      </div>

      <div className={styles.inicio}> 
        
        <p>★ Início</p>
      </div>

      <div className={styles.categorias}>
        <p>★ Categorias</p>
      </div>

      <div className={styles.quem_somos}>
        <p>★ Quem somos</p>
      </div>

      <div className={styles.cadastrar_empresa}>
        <p>Cadastre sua Empresa</p>
      </div>

    </div>

    <div className={styles.linha}>

    </div>
    <div className={styles.anuncio}>
      <p>anuncio</p>
    </div>
  </div>
  );
}
