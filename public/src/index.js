import React from 'reactn'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ForumList from './pages/ForumList'
import P404 from './pages/404'
import { Layout, Col, Row } from 'antd'
import { MenuPathEnum, MenuPageEnum, MenuNameEnum } from './utils/Constants'
import './styles/styles.less'
import LeftSider from './components/LeftSider'
import RightSider from './components/RightSider'

const { Content } = Layout

function Main () {
  return (
    <Router>
      <Layout>
        <Header />
        <Content id='content'>
          <Row>
            <Switch>
              { Object.keys(MenuNameEnum).map((keyName) => {
                var MenuPath = MenuPathEnum[keyName]
                return <Route key={keyName} path={MenuPath} component={LeftSider} exact />
              })}
            </Switch>
            <Col flex={4}>
              <Switch>
                {Object.keys(MenuNameEnum).map((keyName) => {
                  var MenuPage = MenuPageEnum[keyName]
                  var MenuPath = MenuPathEnum[keyName]
                  return <Route key={keyName} path={MenuPath} component={MenuPage} exact />
                })}
                <Route path={'/'} component={() => <Redirect to={MenuPathEnum.home} />} exact />
                <Route component={P404} />
              </Switch>
            </Col>
            <Switch>
              {Object.keys(MenuNameEnum).map((keyName) => {
                var MenuPath = MenuPathEnum[keyName]
                return <Route key={keyName} path={MenuPath} component={RightSider} exact />
              })}
              <Route component={() => <Row />} />
            </Switch>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

let App = document.getElementById('app')

ReactDOM.render(<Main />, App)
