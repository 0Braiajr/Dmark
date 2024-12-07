"use client";
import styles from "../styles/Cadastro.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TelaCadastro() {

  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const [Nome, setNome] = useState ("");
  const router = useRouter();
  const VerificaCampos = (e) => {
      e.preventDefault();

    if (Usuario === "" || Senha === "" || Nome === "") {
      // Cria um alerta se não estiver tudo preenchido.
        alert("Por favor, preencha todos os campos.");
    } 

    else {
        // Redireciona para a página ''
        router.push("/QuemSomos");
    }
    };

    return (
      
      <form className={styles.box} onSubmit={VerificaCampos}>
      <div className={styles.cadastro}>
        <div className={styles.cadastro_text}>
          <span>CADASTRO</span>
        </div>

        <div className={styles.nome}>
          <p>Nome</p>
          <label htmlFor="Nome"></label>
          <input
            type="text"
            id="Nome"
            placeholder="Digite seu nome..."
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className={styles.numero}>
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

        <div className={styles.senha}>
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
      </div>

      <div className={styles.cadastrar_button}>
        <button type="submit" className={styles.LinkCadastrar}>
          <strong>Cadastrar-se</strong>
        </button>
      </div>

      <div className={styles.ja_tem_conta}>
        <a href="/">Já tem conta?</a>
      </div>
    </form>
    );
}
