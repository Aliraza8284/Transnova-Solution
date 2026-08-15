import { Link } from "react-router-dom";

export default function Button({ children, to, type = "button", onClick }) {
  const className = "inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600";
  return to ? <Link to={to} className={className}>{children}</Link> : <button type={type} onClick={onClick} className={className}>{children}</button>;
}
