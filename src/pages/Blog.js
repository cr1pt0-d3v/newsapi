import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header.component';
import MainFeaturedPost from '../components/MainFuturedPost.component';
import FeaturedPost from '../components/FeaturedPost.component';
import Footer from '../components/Footer.component';

import useFetch from "../effects/use-fetch.effect";
import { useParams } from 'react-router-dom';


const Blog = () => {
  let category = useParams().id;
  console.log("id", category);
  const news = useFetch("us", category);
  console.log(news);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="News Api" />
        <main>
          {
            news ? ( <>
              <MainFeaturedPost post={news.articles[0]} />
              <Grid container spacing={4}>
                {news.articles.map((article, id) => (
                  <FeaturedPost key={id} post={article} />
                ))}
              </Grid>
            </> ) : null
          }
        </main>
      </Container>
      <Footer description="For more projects just visit my page!" />
    </>
  );
}

export default Blog;