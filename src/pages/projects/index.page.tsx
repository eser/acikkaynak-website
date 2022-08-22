import { memo } from "react";
import { NextSeo } from "next-seo";
import { useFetchp } from "fetchp";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";

const ProjectList = function ProjectList() {
  const { data, isFetching, error } = useFetchp(
    "GET",
    "https://api.github.com/search/repositories?q=topic:acikkaynak",
  );

  if (isFetching) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <ul className={styles.projects}>
      {data?.items?.map((item) => (
        <li key={item.id}>
          <a href={item.html_url}>
            <h4>
              {item.full_name}
            </h4>
            <div>{item.description}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

const ProjectListMemoized = memo(ProjectList);

const Projects: CustomPage = function Projects() {
  return (
    <>
      <NextSeo title="Projeler" />

      <section className={styles.section}>
        <h1>Projeler</h1>

        <ProjectListMemoized />
      </section>
    </>
  );
};

export { Projects, Projects as default };
