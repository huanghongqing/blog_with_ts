import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import AdminIndex from './adminIndex'
import Login from './Login'

const Main=()=>{
    return(
        <Router>
            <Route path="/login/" exact component={Login} />
            <Route path="/index/"  component={AdminIndex} /> 
            {/* 上面这个index 不能加exact会影响嵌套子路由的匹配。 */}
        </Router>
    )
}
export default Main