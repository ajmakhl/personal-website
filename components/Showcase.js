import CompRepo from "./CompRepo";
export default (props) => {
  const styles = () => {
    switch (props.theme) {
      case "dark":
        return {
          backgroundColor: "#3f3f3f",
          border: "#5f5f5f",
          color: "#fefefe",
        };
      default:
        return {
          backgroundColor: "#f7f7f7",
          border: "#e7e7e7",
          color: "#1f1f1f",
        };
    }
  };
  return (
    <div className="showcase-c">
      <CompRepo link="https://github.com/ajmakhl/personal-website/blob/master/components/Showcase.js">
        <div className="showcase">
          <h2>{props.title}</h2>
          <div className="notes-list">
            <SiteLink
              theme={props.theme}
              name="Notes"
              img="/notes-thumbnail.svg"
            />
            <SiteLink
              theme={props.theme}
              name="TIVISILI"
              img="/tivisili-thumbnail.svg"
            />
          </div>
        </div>
      </CompRepo>
      <style jsx>{`
        .showcase-c {
          width: 960px;
          margin: 10px;
          border-radius: 5px;
          border: 1px solid ${styles().border};
        }
        @media (max-width: 960px) {
          .showcase-c {
            width: calc(100% - 20px);
          }
        }
        h2 {
          color: ${styles().color};
        }
        .showcase {
          padding: 30px;
          border-radius: 5px;
          background-color: ${styles().backgroundColor};
        }
        .notes-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 30px;
        }
        @media (max-width: 500px) {
          .notes-list {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};
const SiteLink = (props) => {
  const styles = () => {
    switch (props.theme) {
      case "dark":
        return {
          backgroundColor: "#3f3f3f",
          border: "#5f5f5f",
          color: "#fefefe",
          color2: "#d65403",
        };
      default:
        return {
          backgroundColor: "#f7f7f7",
          border: "#e7e7e7",
          color: "#1f1f1f",
          color2: "#0366d6",
        };
    }
  };
  return (
    <div className="site-link-c">
      <a className="site-link-a">
        <p>
          {`<`}
          <span>{props.name}</span>
          {` />`}
        </p>
        <div className="site-link">
          <img src={props.img} />
        </div>
      </a>
      <style jsx>{`
        .site-link-c {
          margin: 10px;
        }
        p {
          margin-bottom: 10px;
          font-size: 1.3em;
          font-weight: bold;
          color: ${styles().color};
        }
        span {
          font-weight: normal;
          color: ${styles().color2};
        }
        .site-link-a {
          width: 250px;
          display: block;
          cursor: pointer;
        }
        .site-link-a:hover span {
          text-decoration: underline;
        }
        .site-link-a:hover > .site-link > img {
          width: 270px;
        }
        .site-link {
          width: 250px;
          height: 200px;
          display: block;
          border-radius: 5px;
          overflow: hidden;
          transition: 0.15s cubic-bezier(0.7, 0.7, 0.3, 1);
        }
        .site-link > img {
          cursor: pointer;
          width: 250px;
          transition: 0.15s cubic-bezier(0.7, 0.7, 0.3, 1);
        }
      `}</style>
    </div>
  );
};
