import "./App.css";
import Mensaje from "./Mensaje.js";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};
// const Avatar = () => ({ url, size }) => {
//   return <img className={size ? 'thumbnail' : 'medium'} src={url} alt="prueba" />

// }
function App() {
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando " color="red" />
      <Mensaje message="en un curso " color="blue" />
      <Mensaje message=" de react " color="purple" />
      <Description />
    </div>
  );
}

export default App;
