import style from "../styles/dashboard.module.css"
import Navbar from "../componets/navbar"
export default function Dashboard() {
    return (
      <>
      
      <header>
        <p className={style.hello}>Hello Word!</p>
      </header>

      <aside>
        <Navbar/>
      </aside>

      </>

  );
}