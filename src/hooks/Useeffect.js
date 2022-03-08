import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Useeffect() {
  // const [count, setCount] = useState(0);

  // //useeffect after every render***************************
  // useEffect(() => {
  //   document.title = `you clicked ${count} times`;
  // });

  // return (
  //   <div>
  //     <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  //   </div>
  // );

  //Conditionally run effects**************************
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  // useEffect(() => {
  //   console.log('Updating document title');
  //   document.title = `you clicked ${count} times`;
  // }, []);

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  //   </div>
  // );

  //Run effects only once**********************
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const logMousePosition = (e) => {
  //   console.log('Mouse event!');
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  // useEffect(() => {
  //   console.log('useEffect called!');
  //   window.addEventListener('mousemove', logMousePosition);

  //   //cleanUp code (componentWillUnmount)
  //   return () => {
  //     console.log('Component unmounting code');
  //     window.removeEventListener('mousemove', logMousePosition);
  //   };
  // }, []);

  // return (
  //   <div>
  //     Hooks X - {x}, Y - {y}
  //   </div>
  // );

  //useeffect with incorrect dependency!****************
  // const [count, setCount] = useState(1);
  // const tick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // useEffect(() => {
  //   const interval = setInterval(tick, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // return <h3>{count}</h3>;

  //Fetch data with API endpoint with useeffect***************
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // return (
  //   <div>
  //     <ul>
  //       {posts.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  //Fetch data with API endpoint with useeffect[Individual ID]***************
  // const [post, setPost] = useState([]);
  // const [id, setId] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setPost(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  // return (
  //   <div>
  //     <form>
  //       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
  //     </form>
  //     <ul>
  //       {post.title}
  //       {/* {post.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))} */}
  //     </ul>
  //   </div>
  // );

  //Fetch data with API endpoint with useeffect[Individual ID]***************[on button click,happens without useeffect]
  // const [post, setPost] = useState([]);
  // const [id, setId] = useState(1);

  // const abc = () => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setPost(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // return (
  //   <div>
  //     {/* <form > */}
  //     <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
  //     <button  onClick={abc}>Fetch</button>
  //     {/* </form> */}
  //     <ul>
  //       {post.title}
  //       {/* {post.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))} */}
  //     </ul>
  //   </div>
  // );

  //Fetch data with API endpoint with useeffect[Individual ID]***************[on button click,happens with useeffect] FROM VIDEO
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  return (
    <div>
      <form>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>Fetch Post</button>
      </form>
      <ul>
        {post.title}
        {/* {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default Useeffect;
