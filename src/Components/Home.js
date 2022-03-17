import React from 'react';
import TopHome from './HomePage/MainHome';
import Trending from './HomePage/Trending';
import LatestArticles from './HomePage/LatestArticles';
import LatestStories from './HomePage/LatestStories';

const Home = () => {
  return (
    <div>
      <TopHome />
      <Trending />
      <LatestArticles />
      <LatestStories />
    </div>
  );
};

export default Home;
