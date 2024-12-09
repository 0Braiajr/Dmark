import styles from "../styles/about_us.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Header from "../components/header"
export default function QuemSomos() {

  return (
    <>
    <Header/>

  <div className={styles.body}>
    

    <div className={styles.sobre}>
      
      <Navbar/>

      <div className={styles.sobre_dmark}>
        <div className={styles.logo}>
          <p /* 'logo' para simular a logo da DMARK que iremos substituir futuramente */>logo</p>
        </div>

        <h1>Quem Somos?</h1>

        <p>
             <br /><br />

          Na Dmark, acreditamos que o tempo é um dos nossos bens mais preciosos. Nossa missão é   facilitar a gestão do seu   tempo, proporcionando uma plataforma de agendamento de horários   simples, eficiente e intuitiva. <br /><br />

          Fundada por uma equipe apaixonada por inovação e tecnologia, a Dmark surgiu da necessidade de   transformar a forma   como as pessoas e empresas marcam compromissos. Com uma interface   amigável e funcionalidades que atendem a diversas   necessidades, nosso objetivo é garantir   que cada agendamento seja feito de maneira rápida e sem complicações.
          <br /><br />

          Oferecemos soluções personalizadas que se adaptam a diferentes setores, desde serviços de   saúde até consultas   empresariais. Na Dmark, a prioridade é a satisfação do cliente, e   estamos sempre em busca de novas maneiras de  aprimorar nossa plataforma para atender às  demandas do mercado.

          <br /><br />

          Nosso compromisso vai além da tecnologia: valorizamos o relacionamento humano e a confiança.  Acreditamos que, ao  otimizar o seu tempo, podemos contribuir para que você se concentre no  que realmente importa.

          <br /><br />

          Seja bem-vindo à Dmark, onde cada minuto conta!

        </p>
      </div>
      <div className={styles.box_agendamento}>

        <p className={styles.agendar}>Já que você está aqui Agende um horário!!</p>
        <div className={styles.foto_agendamento}>
          <p>foto</p>

        </div>

        <div className={styles.agendar_button}>
          <a href="">Agende Agora!</a>
        </div>

      </div>

    </div>

      

  </div>
  <Footer/>
        

 

  
  
</>
  );
}