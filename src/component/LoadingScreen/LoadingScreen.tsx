import spinner from "../../asset/spinner/spinner.svg";
import "./style.css";

interface ILoaderProps {
  show: boolean;
}

const LoadingScreen: React.FC<ILoaderProps> = ({ show }) => {
  return (
    <div
      className={show ? "spinner-container" : "spinner-container spinner-hide"}
    >
      <img alt="loader" src={spinner} />
    </div>
  );
};

export default LoadingScreen;
