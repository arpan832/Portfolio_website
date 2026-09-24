import cardo from "./components/card"
const App = () => {

    return (
        <>
            <div className="parent">
                <h1 id='child 1'> Arpan's Portfolio </h1>
                <h2 id="child 2"> Developer </h2>
                {cardo()}
            </div>
        </>
    )
}

export default App