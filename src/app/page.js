import Logo from "./componets/Logo";
import Usuario from "./componets/Usuario";
import Senha from "./componets/Senha";
import Login from "./componets/Login";
import Esqsenha from "./componets/Esqsenha";
import styles from "../app/styles/LoginBox.module.css"
import Cadastrar from "../app/componets/Cadastrar"
export default function TelaLogin() {
  return (
    <>
    <Logo/>
    <div className={styles.LoginBox}>
    <Usuario/>
    <Senha/>
    <Login/>
    <Cadastrar/>
    <Esqsenha/>
    </div>
    </>
  );
}
