/*
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
} */

/*
const user = {
  name: "Jahangirnagar University",
  imageUrl: "https://juniv.edu/storage/image/gallery/OZPXeyoZlC6hmxyFZbzrvLYU4jSC0LwOxJYLtt8u.jpg",
  imageSize: 90,
};
export default function Profile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
      className= "avatar"
      src = {user.imageUrl}
      alt = {"Photo of " + user.name}
      style= {{width: user.imageSize, height: user.imageSize}}
    />
    </>
  );
}
*/
/*
const products= [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
]
export default function ShoppingList() {
  const listItems= products.map(product=>
    <li
      key= {product.id}
      style = {{color: product.isFruit ? 'magenta' : 'blue'}}
    >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems} </ul>
  );
}
*/

/*
function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
export default function MyApp() {
  return (
    <>
    <MyButton />
    </>
  );
}
*/
import {useState}  from 'react'
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <button onClick= {handleClick}>Clicked {count} times</button>
  );
}

export default function MyApp() {
  return (
    <>
    <MyButton/>
    </>
  );
}