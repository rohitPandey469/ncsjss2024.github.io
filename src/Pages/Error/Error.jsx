import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import styles from "./Error.module.css"

export default function Error(){
    return (
        <>
            <Header></Header>
            <main className={styles.errorContainer}>
                <h1>404</h1>
                <p>Requested Page not found</p>
            </main>
            <Footer></Footer>
        </>
    )
}