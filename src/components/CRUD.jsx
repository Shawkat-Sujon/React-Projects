import React from 'react'
import { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';



export const CRUD = () => {

    const [movieList, setMovieList] = useState([]);

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  const getMovieList = async () => {
      const data = await getDocs(moviesCollectionRef)
      const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}))
      setMovieList(filteredData)
    
    
  }

  const deleteMovie = async (id) => {
    try{
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
    } catch(err){
      console.error(err)
    }
  }

  const [updatedTitle, setUpdatedTitle] = useState("");

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, {title: updatedTitle });
  }

  const moviesCollectionRef = collection(db, "movies")

  useEffect(() => {
    getMovieList();
  }, [])

  const onSubmitMovie = async () => {
    try{
      await addDoc(moviesCollectionRef, {title: newMovieTitle, 
        releaseDate: newReleaseDate, 
        receivedAnOscar: isNewMovieOscar,
        userId : auth?.currentUser?.uid,
      })

        
    } catch(err){
      console.error(err);
    }

  }

  return (
    <div>
        <div>
        <input type="text" placeholder='Movie title....' onChange={
          (e) => setNewMovieTitle(e.target.value)}/>
        <input type="number" placeholder='Release Date...' onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
        <input type="checkbox" checked= {isNewMovieOscar} onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
        <label>Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{color: movie.receivedAnOscar? "green": "red" }}>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <input type="text" placeholder='new title..' onChange={(e) => setUpdatedTitle(e.target.value)}/>
            <button onClick={() => updateMovieTitle(movie.id)}>Update Title</button>
          </div>
        ))}
      </div>
    </div>
  )
}
