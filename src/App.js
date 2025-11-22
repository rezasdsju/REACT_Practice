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
/*
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
*/
/*
import {useState} from 'react';
function Square({value}) {
  return (
    <button className='square'>{value}</button>
  );
}
export default function Board() {
  const [squares, setSquares]= useState(Array(9).fill(null));
  return (
    <> 
      <div className='board-row'>
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  )
}
*/


import {useState} from 'react';
function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}
export default function Board() {
  const [squares, setSquares]= useState(Array(9).fill(null));
  const [xIsNext, setXIsNext]= useState(true);
  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares= squares.slice();
    if (xIsNext) {
      nextSquares[i]= 'X';
    } else {
      nextSquares[i]= 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick= {() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick= {() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick= {() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick= {() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick= {() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick= {() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick= {() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick= {() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick= {() => handleClick(8)}/>
      </div>
    </>
  )
}