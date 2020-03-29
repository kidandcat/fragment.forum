import React, { setGlobal } from 'reactn'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import P404 from './pages/404'
import { Layout, Row } from 'antd'
import { MenuPathEnum, MenuPageEnum, ExcludeSiders } from './utils/Constants'
import './styles/styles.less'
import LeftSider from './components/LeftSider'
import RightSider from './components/RightSider'
import { connect } from './server'

const { Content } = Layout

connect()

setGlobal({
  mode: 'pc'
}).then(onresize)

window.addEventListener('resize', onresize)

function onresize () {
  const w = window.innerWidth
  let mode = ''
  if (w > 1200) {
    mode = 'pc'
  } else if (w > 760) {
    mode = 'tablet'
  } else {
    mode = 'phone'
  }
  setGlobal({
    mode
  })
}

function Main () {
  return (
    <Router>
      <Layout>
        <Header />
        <Content id='content'>
          <Switch>
            { Object.keys(MenuPageEnum).map((keyName) => {
              var MenuPath = MenuPathEnum[keyName]
              if (ExcludeSiders.includes(keyName)) {
                return
              }
              return <Route key={keyName} path={MenuPath} component={LeftSider} exact />
            })}
          </Switch>
          <div id='main-container'>
            <Switch>
              {Object.keys(MenuPageEnum).map((keyName) => {
                var MenuPage = MenuPageEnum[keyName]
                var MenuPath = MenuPathEnum[keyName]
                return <Route key={keyName} path={MenuPath} component={MenuPage} exact />
              })}
              <Route path={MenuPathEnum.post} component={MenuPageEnum.post} exact />
              <Route path={'/'} component={() => <Redirect to={MenuPathEnum.home} />} exact />
              <Route component={P404} />
            </Switch>
          </div>
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
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

let App = document.getElementById('app')

ReactDOM.render(<Main />, App)
