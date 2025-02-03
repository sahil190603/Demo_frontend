import React from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { HappyProvider } from '@ant-design/happy-work-theme';



function ModeToggle ({ isDarkMode, onToggle })  {
    return (
        <div>
            <HappyProvider>
            <Switch
                checked={isDarkMode}
                onChange={onToggle}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />} 
            />
            </HappyProvider>
        </div>
    );
}

export default ModeToggle;
