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

/*
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
} */

/*
import {useState} from 'react'
export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton/>
      <MyButton/>
    </div>
  );
}
function MyButton() {
  const [count,setCount]=useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <button onClick={handleClick}> Clicked {count} times</button>
  );
}
  */
/*
import {useState} from 'react'
export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} x={handleClick}/>
      <MyButton count={count} x={handleClick}/>
    </div>
  );
}

function MyButton({count, x}) {
  return (
  <button onClick={x}>Clicked {count} times</button>
  );
}*/

/*
export default function Square() {
  return <button className="square">X</button>;
}
*/
/*
function Square({value}) {
  return <button className="square">{value}</button>;
}
*/

/*
export default function Board() {
  return (
    <>
    <div className='board-row'>
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    </div>
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
    </div>
    </>
  );
}


function Square({value}) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button className='square' onClick={handleClick}>{value}</button>
  );
}
*/
/*
export default function Square() {
  return <button className='square'></button>;
}   
*/

import {useState} from 'react';
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button className='square' onClick={handleClick}>{value}</button>
  );
}

export default function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}