import React from 'react';
import { Layer1 } from './components/layer1/layer1';
import { Menu } from './components/menu/menu';
import { Layer2 } from './components/layer2/layer2'


function App() {
  return (
    <div className="App">
      < Menu />
      < Layer1 />
      < Layer2 />
    </div>
  );
}

export default App;
