import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setMovies } from '../../features/movies/movieSlice'
import db from '../../firebase'
import Movies from '../Movies/Movies'
import ImgSlider from '../Slider/ImgSlider'
import Viewers from '../Viewers/Viewers'

const Home = () => {
const dispatch=useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies));

    })
  }, [])


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}
const Container = styled.main`
    min-height: calc(100vh - 70px);
    position:relative;
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    &:before {
      background: url("/images/home-background.png") center center / cover
      no-repeat fixed;        
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
  }
 
 `
export default Home
