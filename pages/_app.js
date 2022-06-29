import Layout from '../components/Layout'
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={styles.main}>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
