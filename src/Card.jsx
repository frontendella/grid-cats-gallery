import cats from "./data";
import "./App.css";

export default function Card() {
  const cat = cats.map((cat) => (
    <article className="cat_container">
      <img key={cat.name} src={cat.url} className="card-image"></img>
      <div id="text">
        <h1 className="name">{cat.name}</h1>
        <h2 className="breed">
          {cat.breed} • {cat.age}
          {cat.age > 1 ? " years" : " year"}
        </h2>
        <h3 className="description">{cat.description}</h3>
      </div>
    </article>
  ));
  return <div className="card-container">{cat}</div>;
}
