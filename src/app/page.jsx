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
        router.push("/QuemSomos");
    }
    };
    return (
    
<form className={styles.body} onSubmit={VerificaCampos}>
      <div className={styles.Usuario}>
        <div className={styles.loginText}>
          <span>LOGIN</span>
        </div>
        <p>Número</p>
        <label htmlFor="Usuario"></label>
        <input
          type="number"
          id="Usuario"
          placeholder="Digite seu número..."
          value={Usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>

      <div className={styles.Senha}>
        <p>Senha</p>
        <label htmlFor="Senha"></label>
        <input
          type="password"
          id="Senha"
          placeholder="Digite sua senha..."
          value={Senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <div className={styles.Login}>
        <button type="submit" className={styles.LinkLogin}>
          <strong>Login</strong>
        </button>
      </div>

      <div className={styles.Esqsenha}>
        <a href="#">Esqueceu a senha?</a>
      </div>

      <div className={styles.Cadastrar}>
        <a href="cadastro" className={styles.LinkCadastrar}>
          <br />
          <strong>Cadastre-se</strong>
        </a>
      </div>
    </form>
  );
}
