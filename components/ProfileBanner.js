import CompRepo from "./CompRepo";
export default (props) => {
  const styles = () => {
    switch (props.theme) {
      case "dark":
        return {
          backgroundColor: "#3f3f3f",
          border: "#5f5f5f",
          color: "#fefefe",
          color2: "#f1f1f1",
        };
      default:
        return {
          backgroundColor: "#f7f7f7",
          border: "#e7e7e7",
          color: "#1f1f1f",
          color2: "#3d3d3d",
        };
    }
  };
  return (
    <div className="profile-banner-c">
      <CompRepo link="https://github.com/ajmakhl/personal-website/blob/master/components/ProfileBanner.js">
        <div className="profile-banner">
          <img src="/icon.svg" />
          <div>
            <h3>AJ Makhl</h3>
            <p>I am just a guy who codes the web.</p>
          </div>
        </div>
      </CompRepo>
      <style jsx>{`
        .profile-banner-c {
          width: 450px;
          margin: 10px;
          border-radius: 5px;
        }
        @media (max-width: 470px) {
          .profile-banner-c {
            width: calc(100% - 20px);
          }
        }
        .profile-banner {
          display: flex;
          align-items: center;
          padding: 15px;
          border-radius: 5px;
          background-color: ${styles().backgroundColor};
          border: 1px solid ${styles().border};
        }
        img {
          width: 50px;
          margin-right: 15px;
        }
        h3 {
          color: ${styles().color};
        }
        p {
          color: ${styles().color2};
        }
      `}</style>
    </div>
  );
};
