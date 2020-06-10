import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './../../pages/landing/landing'
import About from './../../pages/about/about'
import Header from './../../components/header/header'
import Footer from '../../components/footer/footer'
import Blog from './../../pages/blog/blog'
import Contact from './../../pages/contact/contact'
import NotFound from '../../components/not-found/not-found'

const Home = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/' exact component={Landing} />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default Home
