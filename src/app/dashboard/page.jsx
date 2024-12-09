import styles from "../styles/dashboard.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Header from "../components/header"
export default function Dashboard() {
    return (
    <>
       <Header/>
      <div className={styles.body}>
        <Navbar/>
      </div>
        <Footer/>
    </>
  );
}