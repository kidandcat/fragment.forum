import React from 'reactn'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import P404 from './pages/404'
import { Layout } from 'antd'
import { MenuEnum } from './utils/Constants'
import 'antd/dist/antd.css'
import './styles/styles.css'

const { Content } = Layout

function Main () {
  return (
    <Router>
      <Layout>
        <Header />
        <Content id='content'>
          <Switch>
            <Route path={MenuEnum.home} component={Home} exact />
            <Route path={MenuEnum.profile} component={Profile} exact />
            <Route path={'/'} component={() => <Redirect to='/home' />} exact />
            <Route component={P404} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

let App = document.getElementById('app')

ReactDOM.render(<Main />, App)
