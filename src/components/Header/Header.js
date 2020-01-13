import React,{Component} from 'react'
import './Header.css'
import { Typography } from 'antd';
// import { BrowserRouter as Link} from 'react-router-dom'
const { Title } = Typography;

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
                        <Title level={3}>
                            <a href="/" style={{color: '#52F4EF'}}> Movie App </a>
                        </Title>
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