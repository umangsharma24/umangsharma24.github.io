//import { AppstoreOutlined, MailOutlined, SettingOutlined } from 'icons';
import { useState } from 'react';
import {ConfigProvider, Menu } from 'antd';
import '../styles/Fonts.css';

function SiteHeader(props) {
    
    //State tracking for which button is currently selected
    const [current, setCurrent] = useState('home');
    
    //TODO: Add page paths as a part of this to pass to buttons
    const siteItems = [
        {
            label: 'Icon',
            key: 'icon'
        },
        {
            label: (
                <a href="/#">Home</a>
            ),
            key: 'home'    
        },
        {
            label: 'Contact Me',
            key: 'contact'
        },
        {
            label: (
                <a href="/projects">Projects</a>
            ),
            key: 'projs'
        },
        {
            label: (
                <a href="/internships">Internships</a>
            ),
            key: 'interns'
        },
        {
            label: (
                <a href="/art">Art</a>
            ),
            key: 'art'
        }
    ];
    
    const onButtonClick = (e) => {
        console.log('Clicked: ', e);
        setCurrent(e.key);
    };
    
    return <div>
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        colorBgContainer: '#222222',
                        colorText: '#FFFFFF',
                        fontFamily: 'Magdelin',
                        fontSize: '17px',
                    }
                }
            }}
        >
        <Menu
            className="site-header"
            onClick={onButtonClick}
            selectedKeys={[props.title]}
            mode="horizontal"
            items={siteItems}
            style = {{
                fontWeight: 300
            }}
        />
        </ConfigProvider>
    </div>
}

export default SiteHeader;