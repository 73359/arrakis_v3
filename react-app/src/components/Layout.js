import { Navigationbar } from "./Navigationbar"

export const Layout = ({children}) => {
    return(
        <section>
            <Navigationbar/>
            <div>
                {children}
            </div>
        </section>
    )
}