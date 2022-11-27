import { NavigationBar } from "../components";
import "../styles/scss/index.scss";
import "antd/dist/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
