import { memo, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import graphql from "graphql.js";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";

const UserList = function UserList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const doRequest = async function doRequest() {
      const graph = graphql("https://api.github.com/graphql", {
        method: "POST", // POST by default.
        headers: {
          // "Access-Token": "some-access-token",
        },
      });

      const result = await graph.query(`query {
        search(query: "location:Turkey is:sponsorable sort:repositories-desc", type:USER, first: 100) {
          edges {
            node {
              ... on User {
                id
                login
                name
                twitterUsername
                avatarUrl
                bio
                url
              }
            }
          }
        }
      }`);

      setData(result);
    };

    doRequest();
  }, []);

  console.log(data);
  if (data === null) {
    return <UsersListSkeletonView />;
  }

  return (
    <ul className={styles.users}>
      {data?.map((item) => (
        <li key={item.node.id}>
          <a href={item.node.url}>
            <h4>{item.node.name}</h4>
            <div>
              https://github.com/sponsors/
              {item.node.login}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

const UsersListSkeletonView = function UsersListSkeletonView() {
  return (
    <ul className={[styles.users, styles["users-skeleton"]].join(" ")}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <li key={index}>
            <a>
              <h4 />
              <div />
            </a>
          </li>
        ))}
    </ul>
  );
};

const UserListMemoized = memo(UserList);

const Users: CustomPage = function Users() {
  return (
    <>
      <NextSeo title="Desteklenebilecek Kullanıcılar" />

      <section className={styles.section}>
        <h1>Desteklenebilecek Kullanıcılar</h1>

        <UserListMemoized />
      </section>
    </>
  );
};

export { Users, Users as default };
