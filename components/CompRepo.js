import Link from "next/link";
export default (props) => {
  return (
    <div className="comp-repo-c">
      <a className="comp-repo-i" target="_blank" href={props.link}>
        <img src="/repo-icon.svg" />
      </a>
      {props.children}
      <style jsx>{`
        .comp-repo-c {
          position: relative;
          border-radius: inherit;
          transition: 0.1s cubic-bezier(0.7, 0.7, 0.3, 1);
        }
        .comp-repo-c:hover {
        }
        .comp-repo-c:hover > .comp-repo-i {
          display: block;
        }
        .comp-repo-i {
          cursor: pointer;
          display: none;
          position: absolute;
          top: -30px;
          left: 0;
        }
        .comp-repo-i > img {
          width: 30px;
        }
      `}</style>
    </div>
  );
};
