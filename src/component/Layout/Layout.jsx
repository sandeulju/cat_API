export const Layout = ({ children, className }) => {
  return (
    <div className="container is-max-desktop">
      <div className={`notification ${className}`}>{children}</div>
    </div>
  );
};
