import React,{Component} from 'react'
import './Header.css'
// import { BrowserRouter as Link} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div>
            <table className="titleBar">
                <tbody>
                <tr>
                    <td>
                        {/*<img alt="logo" width="50" src="cinema.svg"/>*/}
                    </td>
                    <td>

                        <h1 style={{color: '#52F4EF'}}> Movie App </h1>

                    </td>
                </tr>
                </tbody>
            </table>
                {/*<input className="movieSearch" placeholder="Enter your movie"/>*/}
            </div>

        )
    }
}
export default Navigation;