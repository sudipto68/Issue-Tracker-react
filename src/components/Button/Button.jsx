/* eslint-disable react/prop-types */
const Button = ({ className, title, type, onClick }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
