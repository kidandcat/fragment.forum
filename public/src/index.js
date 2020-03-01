import React from 'reactn'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import P404 from './pages/404'
import { Layout, Col, Row } from 'antd'
import { MenuPathEnum, MenuPageEnum, ExcludeSiders } from './utils/Constants'
import './styles/styles.less'
import LeftSider from './components/LeftSider'
import RightSider from './components/RightSider'
import { connect } from './server'

const { Content } = Layout

connect()

function Main () {
  return (
    <Router>
      <Layout>
        <Header />
        <Content id='content'>
          <Row style={{ height: '100%', backgroundColor: 'red' }}>
            {
            // TODO: esto no quiere ponerse al 100% suputa madre}
            }
            <Switch>
              { Object.keys(MenuPageEnum).map((keyName) => {
                var MenuPath = MenuPathEnum[keyName]
                if (ExcludeSiders.includes(keyName)) {
                  return
                }
                return <Route key={keyName} path={MenuPath} component={LeftSider} exact />
              })}
            </Switch>
            <Col flex={4} style={{ height: '100%' }}>
              <Switch>
                {Object.keys(MenuPageEnum).map((keyName) => {
                  var MenuPage = MenuPageEnum[keyName]
                  var MenuPath = MenuPathEnum[keyName]
                  return <Route key={keyName} path={MenuPath} component={MenuPage} exact />
                })}
                <Route path={'/'} component={() => <Redirect to={MenuPathEnum.home} />} exact />
                <Route component={P404} />
              </Switch>
            </Col>
            <Switch>
              {Object.keys(MenuPageEnum).map((keyName) => {
                var MenuPath = MenuPathEnum[keyName]
                if (ExcludeSiders.includes(keyName)) {
                  return
                }
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
