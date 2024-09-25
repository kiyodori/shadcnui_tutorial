    import '../app/globals.css';
    import { useEffect } from 'react';

    function MyApp({ Component, pageProps }) {
      useEffect(() => {
        // クライアントサイドの初期化が必要な場合はここに記述
      }, []);

      return <Component {...pageProps} />;
    }

    export default MyApp;
