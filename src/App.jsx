import React from 'react';

import Header from './components/header/Header';
import BasicCard from './components/card/basic_card/BasicCard';
import RotateCard from './components/card/rotate_card/RotateCard';

const App = () => {
    return (
        <div>
            <Header/>
            <BasicCard/>
            {/* <RotateCard/> */}
        </div>
    );
};

export default App;
