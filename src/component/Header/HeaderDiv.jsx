import { useNavigate, NavLink } from "react-router-dom";
// Navigate를 사용하면 Navlink로 감싸서 하는 것 과는 다르게 속성을 추가하듯이 route를 연결할 수 있다.
// (상황에 따라 Navigate가 좀 더 편리할 수 있다.)
// 해당 코드중에서는 img 태그를 그러한 방식으로 작성했었다!!(나머지는 NavLink)
const HeaderDiv = () => {
  const navigation = useNavigate();

  const onClick = () => {
    navigation("/");
  };

  return (
    // NavLink는 style 적용이 되고, Link는 style 적용이 안되는걸 기억하자.
    <div>
      <nav className="level">
        <p className="level-item has-text-centered">
          <NavLink
            to={"/dog"}
            className="link is-info"
            style={{ textDecoration: "none", margin: "0 30px" }}
          >
            Dog
          </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink
            to={"/cat"}
            className="link is-info"
            style={{ textDecoration: "none", margin: "0 30px" }}
          >
            Cat
          </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <img
            src="https://bulma.io/images/bulma-type.png"
            alt=""
            style={{ height: 30, cursor: "pointer", margin: "0 30px" }}
            onClick={onClick}
          />
        </p>
        <p className="level-item has-text-centered">
          <NavLink
            className="link is-info"
            style={{ textDecoration: "none", margin: "0 30px" }}
          >
            Ohter1
          </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink
            className="link is-info"
            style={{ textDecoration: "none", margin: "0 30px" }}
          >
            Ohter2
          </NavLink>
        </p>
      </nav>
    </div>
  );
};

export default HeaderDiv;
