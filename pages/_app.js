import "../styles/globals.css";

import MainLayout from "../layouts/MainLayout";
// import AuthContextProvider from "../state/context/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    // <AuthContextProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    // </AuthContextProvider>
  );
}

export default MyApp;
