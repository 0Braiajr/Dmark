import styles from "../styles/Usuario.module.css"
export default function Usuario() {
    return (
  
      <div className={styles.Usuario}>
        <div className={styles.loginText}>
          <span>LOGIN</span>
        </div>
        <p>
          Número
        </p>
        <input type="number" name="" id="" placeholder='Digite seu número...'/>
      </div>
  
    );
  }