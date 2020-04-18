import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>AJ Makhl - Web Developer</title>
      <link rel="icon" href="/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <main>
      <h3>Nothing here yet.</h3>
    </main>

    <style jsx>{`
      main {
        max-width: 1024px;
        margin: 0 auto;
      }
      h3 {
        margin-top: 30px;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
      * {
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
      }
    `}</style>
  </div>
);

export default Home;
