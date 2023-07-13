//import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }) {
  return (
          <MainLayout>
          <Component {...pageProps} />
          </MainLayout>
          )
}
