import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <>
      <h1>home page</h1>

      <div className={styles.container}>
        {data.map((post, i) => {
          return (
            <div key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p> <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
