import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// const localURL = 'http://localhost:3000/api/get-qoute';

const serverURL = 'https://express-rbm1.onrender.com/api/get-qoute';

function App() {
   const [qoute, setQoute] = useState('Get the inspiration');

   const getQoutes = useCallback(async () => {
      try {
         const result = await fetch(serverURL, {});
         if (!result || !result.ok) {
            throw Error('error');
         }

         const data = await result.json();

         setQoute(data.quoteText);
      } catch (error) {
         console.log(error);
      }
   }, []);

   return (
      <>
         <div>
            <a href='https://vitejs.dev' target='_blank'>
               <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>
            <a href='https://react.dev' target='_blank'>
               <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className='card'>
            <button
               onClick={() => {
                  getQoutes();
               }}
            >
               {qoute}
            </button>
            <p>
               Edit <code>src/App.jsx</code> and save to test HMR
            </p>
         </div>
         <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </>
   );
}

export default App;
