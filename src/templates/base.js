import SimpleSidebar from "../components/SimpleSideBar"

const Base = ({ children }) => {
    return (
        <>
            <SimpleSidebar> {children}</SimpleSidebar>
        </>
    )
}

export default Base

