import { combineReducers } from "redux";
import {
  nowPlayingMovieReducer,
  TopRatedMovieReducer,
  GenreListReducer,
  TrendingPeopleReducer,
  PopularMovieReducer,
  upCommingMovieReducer,
  boxOfficeMovieReducer,
  TrendingMovieReducer,
  GenreMovieReducer,
  SearchedMovieReducer,
  FullMovieReducer,
  MovieExtIdsReducer,
  MovieCastReducer,
  MovieCrewReducer,
  MovieReviewReducer,
  MovieBuyReducer,
  MovieRentReducer,
  MovieFlatReducer,
  SimilarMovieReducer,
  RecomendedMovieReducer,
  MovieVideoReducer,
  PopularPeopleReducer,
  SearchPeopleReducer,
  FullPeopleReducer,
  PeopleMovieReducer,
  PeopleTvReducer,
  PeopleExtIdsReducer,
  PeopleIMGReducer,
  SearchMultiReducer,
  LoginReducer,
} from "./fetchingReducer";
import {
  HboTvReducer,
  HboMaxTvReducer,
  HotstarTvReducer,
  AmazonTvReducer,
  NetflixTvReducer,
  MostVotedTvReducer,
  PopularTvReducer,
  TopRatedTvReducer,
  SearchTvReducer,
  TrendingTvReducer,
  GenreListTVReducer,
  GenreTVReducer,
  FullTvReducer,
  TvExtIdsReducer,
  TvVideoReducer,
  TVCastReducer,
  TVCrewReducer,
  RecomendedTvReducer,
  SimilarTvReducer,
  TvFlatReducer,
  TvEPdetailsReducer,
  EPVideoReducer,
} from "./tvfetchingReducer";
export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  TopRatedMovies: TopRatedMovieReducer,
  popularMovies: PopularMovieReducer,
  boxOfficeMovie: boxOfficeMovieReducer,
  trendingMovie: TrendingMovieReducer,
  genreList: GenreListReducer,
  upCommingMovie: upCommingMovieReducer,
  genreMovies: GenreMovieReducer,
  fullMovieDetails: FullMovieReducer,
  searchedMovies: SearchedMovieReducer,
  movieExtIds: MovieExtIdsReducer,
  movieCast: MovieCastReducer,
  movieCrew: MovieCrewReducer,
  movieReview: MovieReviewReducer,
  movieBuy: MovieBuyReducer,
  movieRent: MovieRentReducer,
  movieFlat: MovieFlatReducer,
  similarMovie: SimilarMovieReducer,
  recomendedMovies: RecomendedMovieReducer,
  movieVideos: MovieVideoReducer,
  hbotv: HboTvReducer,
  hbomaxtv: HboMaxTvReducer,
  hotstartv: HotstarTvReducer,
  amazontv: AmazonTvReducer,
  netflixtv: NetflixTvReducer,
  mostvotedtv: MostVotedTvReducer,
  PopularTv: PopularTvReducer,
  topRatedTv: TopRatedTvReducer,
  searchedTv: SearchTvReducer,
  trendingTv: TrendingTvReducer,
  genreListTv: GenreListTVReducer,
  genreTvshows: GenreTVReducer,
  fullTvDetails: FullTvReducer,
  tvExtIds: TvExtIdsReducer,
  tvVideos: TvVideoReducer,
  tvCast: TVCastReducer,
  tvCrew: TVCrewReducer,
  recomendedTv: RecomendedTvReducer,
  similarTv: SimilarTvReducer,
  tvstream: TvFlatReducer,
  epdetails: TvEPdetailsReducer,
  epvideo: EPVideoReducer,
  searchedPeople: SearchPeopleReducer,
  trendingPeople: TrendingPeopleReducer,
  popularPeople: PopularPeopleReducer,
  peopleDetail: FullPeopleReducer,
  peoplemv: PeopleMovieReducer,
  peopletv: PeopleTvReducer,
  peopleext: PeopleExtIdsReducer,
  peopleimg: PeopleIMGReducer,
  multiRes: SearchMultiReducer,
  login: LoginReducer,
});
