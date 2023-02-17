import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2 onClick={() => window.location.href= "https://www.linkedin.com/in/marcoagalvao/"}>Desenvolvido por Marco Antônio.</h2>
        </footer>
    )
}

export default Rodape;