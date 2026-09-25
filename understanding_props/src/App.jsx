import Cards from "./components/Card"

const App = () => {
  return (
    <div>
      <div className="parent">
        <Cards user ="Durba Sarkar" img = "https://plus.unsplash.com/premium_vector-1682269284255-8209b981c625?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" hobby ="Artist"/>
        <Cards user = "Arpan sarkar" img = "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" hobby ="Devloper"/>
      </div>
    </div>
  )
}



export default App