import styles from "../styles/footer.module.css"


export default function footer() {
  
  return(
    <div className={styles.footer}>
      <div className={styles.logo}>
        LOGO
      </div>

      <div className={styles.infos}>
        <span>CONTATE A DMARK</span> 
        <p>TELEFONE: (00) 0 0000-0000</p>
        <p>EMAIL: emailDmark00@gmail.com</p>
        <p>NOS SIGA</p>
        <div className={styles.logos_info}>
          <div className={styles.social_media}>LINKEDIN</div>
          <div className={styles.social_media}>INSTAGRAM</div>
        </div>

        <div className={styles.developers}>
          <p>DESENVOLVIDO POR: MARCELO VYNICIUS / FERNANDO NETO / JOÃO LEVI</p>
        </div>
      </div>
      
      
      

    </div>
  );
}