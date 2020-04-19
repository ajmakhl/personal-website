import Head from "next/head";
import ProfileBanner from "../components/ProfileBanner";
import ThemeSwitch from "../components/ThemeSwitch";
import cookie from "cookie";
import { useState } from "react";
const Index = (props) => {
  const [theme, setTheme] = useState(props.initialTheme);
  return (
    <div>
      <Head>
        <title>AJ Makhl - Web Developer</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <ProfileBanner theme={theme} />
      </main>

      <style jsx>{`
        main {
          max-width: 1024px;
          margin: 0 auto;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color: ${theme === "dark" ? "#151515" : "#fefefe"};
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          transition: 0.3s cubic-bezier(0.7, 0.7, 0.3, 1);
          font-family: "Roboto", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: none;
        }
      `}</style>
    </div>
  );
};
const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
};
Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  return {
    initialTheme: cookies.theme,
  };
};

export default Index;
