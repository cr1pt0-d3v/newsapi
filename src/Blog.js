import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header.component';
import MainFeaturedPost from './components/MainFuturedPost.component';
import FeaturedPost from './components/FeaturedPost.component';
import Footer from './components/Footer.component';

import useFetch from "./effects/use-fetch.effect";


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  {title: 'General', url: "#" },
  { title: 'Technology', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Sports', url: '#' },
  { title: 'Entertainment', url: '#' },
  
];

export default function Blog() {
  const classes = useStyles();
  const news = useFetch();
  console.log(news);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="News Api" sections={sections} />
        <main>
          {
            news ? (<><MainFeaturedPost post={news.articles[0]} />
              <Grid container spacing={4}>
                {news.articles.map((article, id) => (
                  <FeaturedPost key={id} post={article} />
                ))}
              </Grid>
              <Grid container spacing={5} className={classes.mainGrid}>
              </Grid></>) : null
          }
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </>
  );
}
