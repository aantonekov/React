import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as filmsActions from '../../actions/films';


function Page() {

  const getNameFilm = useSelector(state => state.films.namefilm);


  const id = 5;
  const film = useSelector(state => state.films.items.find(item => item.id === id));

  const dispatch = useDispatch();

  useEffect(() => {
    if(film) {
      return;
    }
    
    filmsActions.getById(id, dispatch);

  }, []);
  // const test = useSelector(state => state.films.ggg);
  // const test2 = useSelector(state => state);
  // console.log('test2', test2);

  const isLoading = !film || (film && film.status !== 'ok');


  //proxy

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/hellow')
    .then(response => response.json())
    .then(response => setData(response.message))
  })

  return (
   <>
    <h1>Work</h1>
    <div>NameFilm: {getNameFilm} </div>
    <br />

    <h1>Films</h1>
    {isLoading ? (
      <div>is loadin</div>
    ) : (
      <div>
        Film: {film.id}, {film.item.title}
      </div>
    )}

    <h1>test proxi connect</h1>
    {
      !data ?'Loading...' : data
    }

   </>
  );
}

export default Page;
