import { Footer, Header, NavigationBar } from "../components";
import "../styles/scss/index.scss";
import "antd/dist/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
