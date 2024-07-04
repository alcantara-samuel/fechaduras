import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <nav className="container"><ul>
          <li>Logo</li>
          <li>São Paulo - SP</li>
          <li>(11)9999-9999</li>
      </ul>  </nav>
      <div className="container">
      <div className={styles.headerInfo}>   
          <div className={styles.headerText}>
          <h1>INSTALAÇÃO DE <span>FECHADURA ELETRÔNICA</span></h1>
          <p>
Nosso compromisso é com a sua conveniência. Agende conosco e tenha a instalação de fechaduras eletrônicas realizada por uma equipe experiente e ágil.</p>
        </div>
        <div className={styles.headerForm}>
          <form action="" method="get">
            <input type="text" name="name" placeholder="Digite seu nome" id="" />
            <input type="email" name="" id="" placeholder="Seu e-mail"/>
            <input type="text" name="" id="" placeholder="(DDD) Whatsapp"/>
            <input type="submit" value="SOLICITAR CONTATO" />
          </form>

        </div>
        </div>
      </div>
      
      </header>
      <section>
        <div className="container">
          <div className={styles.sectionCardInfo}>
              <div className={styles.cardInfo}></div>
              <div className={styles.cardInfo}></div>

              <div className={styles.cardInfo}></div>

              <div className={styles.cardInfo}></div>

          </div>
        </div>
      </section>


    </main>
  );
}
