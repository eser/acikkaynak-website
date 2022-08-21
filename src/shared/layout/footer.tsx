import styles from "./footer.module.css";

interface FooterProps {
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <hr />
      açık-kaynak.org © {new Date().getFullYear()}
    </footer>
  );
};

export { Footer, Footer as default };
