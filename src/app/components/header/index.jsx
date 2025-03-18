import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
        <h1>Sala de Troféus do Corinthians</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/"}>Início</Link>
            </li>
            <li>
              <Link href={"/titulos"} >Títulos</Link>
            </li>
            <li>
              <Link href={"#"}>História</Link>
            </li>
            <li>
              <Link href={"#"}>Campeonatos</Link>
            </li>
            <li>
              <Link href={"#"}>Ídolos</Link>
            </li>
            <li>
              <Link href={"#"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;