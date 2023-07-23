// import { useEffect, useState } from 'react';
// import { useParams, NavLink, Link } from 'react-router-dom';
// import axios from 'axios';
// import { API_URL, API_KEY } from 'api/config';

// import css from './Cast.module.css';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);
//   const [err, setErr] = useState(null);
//   const initDisplay = 5;
//   const [display, setDisplay] = useState(initDisplay);

//   useEffect(() => {
//     const fetchCredits = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           url: `${API_URL}/movie/${movieId}/credits`,
//           params: {
//             api_key: API_KEY,
//             language: 'en-US',
//             credits: true,
//           },
//           headers: {
//             accept: 'application/json',
//             Authorization: `Bearer ${API_KEY}`,
//           },
//         };

//         const resp = await axios.request(options);
//         setCast(resp.data.cast);
//       } catch (err) {
//         console.error(err);
//         setErr('Error fetching Credits');
//       }
//     };

//     fetchCredits();
//   }, [movieId]);

//   const handleDisplayAll = () => {
//     setDisplay(prevDisplay =>
//       prevDisplay === initDisplay ? cast.length : initDisplay
//     );
//   };

//   if (err) {
//     return <div>{err}</div>;
//   }

//   return (
//     <div className={css.boxCast}>
//       <h4 className={css.title}>Additional information</h4>
//       <div className={css.cast}></div>

//       {cast && cast.length > 0 ? (
//         <ul>
//           {cast.slice(0, display).map(actor => (
//             <li key={actor.id} className={css.nameActor}>
//               {actor.name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div>No Information</div>
//       )}

//       <button onClick={handleDisplayAll} className={css.btn}>
//         {display === initDisplay ? 'Show More' : 'Close'}
//       </button>
//     </div>
//   );
// };

// export default Cast;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from 'api/config';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [err, setErr] = useState(null);
  const initDisplay = 5;
  const [display, setDisplay] = useState(initDisplay);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const options = {
          method: 'GET',
          url: `${API_URL}/movie/${movieId}/credits`,
          params: {
            api_key: API_KEY,
            language: 'en-US',
            credits: true,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const resp = await axios.request(options);
        setCast(resp.data.cast);
      } catch (err) {
        console.error(err);
        setErr('Error fetching Credits');
      }
    };

    fetchCredits();
  }, [movieId]);

  const handleDisplayAll = () => {
    setDisplay(prevDisplay =>
      prevDisplay === initDisplay ? cast.length : initDisplay
    );
  };

  if (err) {
    return <div>{err}</div>;
  }

  if (cast.length === 0) {
    return <div>No information</div>
  }

  return (
    <div className={css.boxCast}>
      <h4 className={css.title}>Additional information</h4>
      <div className={css.cast}></div>

      <ul>
        {cast.slice(0, display).map(actor => (
          <li key={actor.id} className={css.nameActor}>
            {actor.name}
          </li>
        ))}
      </ul>

      <button onClick={handleDisplayAll} className={css.btn}>
        {display === initDisplay ? 'Show More' : 'Close'}
      </button>
    </div>
  );
};

export default Cast;
