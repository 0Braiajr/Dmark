"use client";
import styles from "../app/styles/Tela_Login.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TelaLogin() {
    
    const [Usuario, setUsuario] = useState("");
    const [Senha, setSenha] = useState("");
    const router = useRouter();
    const VerificaCampos = (e) => {
      e.preventDefault();
    if (Usuario === "" || Senha === "" ) {
      // Cria um alerta se não estiver tudo preenchido.
        alert("Por favor, preencha todos os campos.");
    } 
    else {
        // Redireciona para a página 'QuemSomos'
        router.push("/dashboard");
    }
    };
    return (
    
<form className={styles.body} onSubmit={VerificaCampos}>
  <div className={styles.box}>

  
    <div className={styles.usuario}>
      <div className={styles.loginText}>
        <span>LOGIN</span>
      </div>

      <p>Número</p>

      <label htmlFor="numero"></label>

      <input className={styles.input}
        type="number"
        id="Usuario"
        placeholder="Digite seu número..."
        value={Usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
    </div>

    <div className={styles.senha}>
      <p>Senha</p>
      <label htmlFor="Senha"></label>

      <input className={styles.input}
        type="password"
        id="Senha"
        placeholder="Digite sua senha..."
        value={Senha}
        onChange={(e) => setSenha(e.target.value)}
      />
    </div>

    <div className={styles.login}>
      <button type="submit" className={styles.link_login}>
        <p>login</p>
      </button>

    </div>

    <div className={styles.cadastrar}>
      <a href="register" className={styles.link_cadastrar}>
        <br />
        <p>Cadastre-se</p>
      </a>
    </div>

    <div className={styles.esqsenha}>
      <a href="#">Esqueceu a senha?</a>
    </div>

    
  </div>
</form>
  );
}