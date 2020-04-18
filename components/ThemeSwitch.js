import Cookies from "js-cookie";
export default (props) => {
  const handleSwitch = () => {
    const currentTheme = props.theme === "dark" ? "light" : "dark";
    props.setTheme(currentTheme);
    Cookies.set("theme", currentTheme);
  };
  const styles = () => {
    if (props.theme === "dark") {
      return {
        backgroundColor: "#fefefe",
        switchColor: "#3f3f3f",
      };
    } else {
      return {
        backgroundColor: "#3f3f3f",
        switchColor: "#fefefe",
      };
    }
  };
  return (
    <div className="theme-switch-w">
      <div className="theme-switch-c" onClick={handleSwitch}>
        <div className="theme-switch-i" />
      </div>
      <style jsx>{`
        .theme-switch-w {
          width: 450px;
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 470px) {
          .theme-switch-w {
            width: calc(100% - 20px);
          }
        }
        .theme-switch-c {
          cursor: pointer;
          box-sizing: content-box;
          position: relative;
          display: flex;
          align-items: center;
          width: 50px;
          height: 25px;
          padding: 1px;
          border-radius: 25px;
          background-color: ${props.theme === "dark" ? "#fefefe" : "#3f3f3f"};
        }
        .theme-switch-c:hover {
          box-shadow: inset 0 0 10px 0
            ${props.theme === "dark" ? "#3f3f3f" : "black"};
        }
        .theme-switch-i {
          position: absolute;
          display: block;
          width: 25px;
          height: 25px;
          border-radius: 25px;
          right: ${props.theme === "dark" ? "1px" : "calc(100% - 25px - 1px)"};
          background-color: ${styles().switchColor};
        }
      `}</style>
    </div>
  );
};
// background-color: ${styles().backgroundColor};
