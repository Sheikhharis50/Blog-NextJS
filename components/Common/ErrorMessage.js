const ErrorMessage = ({ message }) => {
  return <div className="error-label">{message ? `*${message}` : ""}</div>;
};

export default ErrorMessage;
