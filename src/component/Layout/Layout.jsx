export const Layout = ({ children, className }) => {
  return (
    <div className="container is-max-desktop">
      <div
        className={`notification ${className}`}
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        {children}
      </div>
    </div>
  );
};
