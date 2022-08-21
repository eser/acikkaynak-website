import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";

const Constributing: CustomPage = function Constributing() {
  return (
    <>
      <NextSeo title="Destek" />

      <section className={styles.section}>
        <h2>Destek</h2>

        <p>
          Ullamco et nostrud magna commodo nostrud occaecat quis pariatur id
          ipsum. Ipsum consequat enim id excepteur consequat nostrud esse esse
          fugiat dolore. Reprehenderit occaecat exercitation non cupidatat in
          eiusmod laborum ex eu fugiat aute culpa pariatur. Irure elit proident
          consequat veniam minim ipsum ex pariatur.<br />
          <br />
          Mollit nisi cillum exercitation minim officia velit laborum non Lorem
          adipisicing dolore. Labore commodo consectetur commodo velit
          adipisicing irure dolore dolor reprehenderit aliquip. Reprehenderit
          cillum mollit eiusmod excepteur elit ipsum aute pariatur in. Cupidatat
          ex culpa velit culpa ad non labore exercitation irure laborum.
        </p>
      </section>
    </>
  );
};

export { Constributing, Constributing as default };
