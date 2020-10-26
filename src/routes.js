import Movie from  './components/movie'
import Home from './components/watchLater'

export const routes = [
  { path: '', component: Home },
  { path: '/movie', component: Movie }
];
