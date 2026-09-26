import Cards from "./components/Card"

// data access through array objects 

const App = () => {

const arr = [
  {
    user:"Arpan",
    hobby:"Developer",
    img:"https://images.unsplash.com/vector-1740737650825-1ce4f5377085?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    user:"Durba",
    hobby:"Artist",
    img:"https://media.istockphoto.com/id/1244960381/vector/sketchy-style-artistic-character-man-with-the-beard.webp?a=1&b=1&s=612x612&w=0&k=20&c=tKZozxk8KfkJAHC2AAYPp6NTFofqY9oHL-rz8FpTWRQ="
  }
];
  
  return (
    <div>
      <div className="parent">
        {arr.map(function(elem,idx ){
          console.log(idx)
          return <Cards name ={elem.user} hobby = {elem.hobby} img = {elem.img}/> 
        })}
        

      </div>
    </div>
  )
}



export default App