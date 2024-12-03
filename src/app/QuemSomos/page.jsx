import styles from "../styles/QuemSomos.module.css"

export default function QuemSomos() {

  return (
<>
  <div className={styles.body}>

  
    
      <div className={styles.sobre}>

        <div className={styles.barra_lateral}>
          <div className={styles.barra_tarefas}>
            <div className={styles.cadastre_se}>
              <p>Cadastre-se</p>
            </div>

            <div className={styles.inicio}>
              <p>Início</p>
            </div>

            <div className={styles.categorias}>
              <p>Categorias</p>
            </div>

            <div className={styles.quem_somos}>
              <p>Quem somos</p>
            </div>

            <div className={styles.cadastrar_empresa}>
              <p>Cadastre sua Empresa</p>
            </div>

          </div>

          <div className={styles.anuncio}>

          </div>
        </div>

        <div className={styles.sobre}>
          <div className={styles.logo}>
            <p>logo</p>
          </div>

          <h1>Quem Somos?</h1>

          <p>
              Dmark

            Na Dmark, acreditamos que o tempo é um dos nossos bens mais preciosos. Nossa missão é facilitar a gestão do seu   tempo, proporcionando uma plataforma de agendamento de horários simples, eficiente e intuitiva. 
    
            Fundada por uma equipe apaixonada por inovação e tecnologia, a Dmark surgiu da necessidade de transformar a forma   como as pessoas e empresas marcam compromissos. Com uma interface amigável e funcionalidades que atendem a diversas   necessidades, nosso objetivo é garantir que cada agendamento seja feito de maneira rápida e sem complicações.

            Oferecemos soluções personalizadas que se adaptam a diferentes setores, desde serviços de saúde até consultas   empresariais. Na Dmark, a prioridade é a satisfação do cliente, e estamos sempre em busca de novas maneiras de  aprimorar nossa plataforma para atender às demandas do mercado.

            Nosso compromisso vai além da tecnologia: valorizamos o relacionamento humano e a confiança. Acreditamos que, ao  otimizar o seu tempo, podemos contribuir para que você se concentre no que realmente importa.

            Seja bem-vindo à Dmark, onde cada minuto conta!

          </p>
        </div>
        <div className={styles.box_agendamento}>

          <p>Já que você está aqui Agende um horário!!</p>
          <div className={styles.foto_agendamento}>
          <p>foto</p>

        </div>

      </div>
      </div>
        

  </div>
</>
  );
}