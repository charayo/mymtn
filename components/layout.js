import { useRouter } from "next/router";
import { Head } from "next/document";
import Footer from "./Footer"
import Headers from "./Head.js"
import MainNav from "./nav";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Headers />
      {router.pathname != '/user-account/recovery' && router.pathname != '/user-account/signup' && router.pathname != '/user-account/login' && <MainNav />}
      {children}
      {router.pathname != '/user-account/recovery' && router.pathname != '/user-account/signup' && router.pathname != '/user-account/login' && <Footer />}
    </div>
  )
}
