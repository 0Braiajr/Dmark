import styles from "../styles/Cadastro.module.css"

export default function Cadastro() {
    return (
      

        <div className={styles.box}>


          <div className={styles.cadastro}>
            <div className={styles.cadastro_text}>
              <span>CADASTRO</span>
            </div>

            <div className={styles.inputs}>
               {/*apesar de não ter alterações no css, optamos por colocar classes em cada div dos inputs por uso futuro no javascript*/}
              <div className={styles.nome}>
                <p>
                  Nome
                </p>

                <input type="text" name="" id="" placeholder='Digite seu nome...'/>
              </div>

              <div className={styles.numero}>
                <p>
                  Número
                </p>
                <input type="number" name="" id="" placeholder='Digite seu número...'/>
              </div>

              <div className={styles.senha}>
                <p>
                  Senha
                </p>
                <input type="password" name="" id="" placeholder='Digite sua senha...'/>
              </div>
              
            </div>
           

          </div>

          
          <div className={styles.cadastrar_button}>

            <a href=""><strong>Cadastrar-se</strong></a>

          </div>

        <div className={styles.ja_tem_conta}>

          <a href="#">Já tem conta?</a>
          
        </div>
          
        </div>
          
       
  );
}