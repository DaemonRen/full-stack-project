import { useState } from "react";
import "./Form.scss";

// form styles jacked from here
// https://codepen.io/banunn/pen/AFnal

const Form = () => {
  const [deity, setDeity] = useState({
    createdBy: "",
    deityName: "",
    deityOf: "",
    deityPantheon: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/deity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deity)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Deity</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" onInput={(e) => setDeity({ ...deity, createdBy: e.target.value })} />
        <input type="text" placeholder="deity name" onInput={(e) => setDeity({ ...deity, deityName: e.target.value })} />
        <input type="text" placeholder="deity of" onInput={(e) => setDeity({ ...deity, deityOf: e.target.value })} />
        <input type="text" placeholder="deity pantheon" onInput={(e) => setDeity({ ...deity, deityPantheon: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;