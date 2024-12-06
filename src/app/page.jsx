import styles from "../app/styles/Tela_Login.module.css"
export default function TelaLogin() {
  return (
    <div className={styles.body}>
    <div className={styles.Usuario}>
        <div className={styles.loginText}>
          <span>LOGIN</span>
        </div>
        <p>
          Número
        </p>
        <input type="number" name="" id="" placeholder='Digite seu número...'/>
      </div>
      <div className={styles.Senha}>
        <p>
          Senha
        </p>
        <input type="password" name="" id="" placeholder='Digite sua senha...' />
      </div>
      <div className={styles.Login}>

        <a href="" className={styles.LinkLogin}><strong>Login</strong></a>

      </div>
      <div className={styles.Esqsenha}>
        <a href="#">Esqueceu a senha?</a>
    </div>
    <div className={styles.Cadastrar}>
        <a href="" className={styles.LinkCadastrar}><br /> <strong>Cadastre-se</strong> </a>
    </div>
    </div>
  );
}
