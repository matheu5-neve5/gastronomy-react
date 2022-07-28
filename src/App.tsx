import React from 'react';
import { Layer1 } from './components/layer1/layer1';
import { Menu } from './components/menu/menu';
import { Layer2 } from './components/layer2/layer2'
import { Layer3 } from './components/layer3/layer3';
import { Layer4 } from './components/layer4/layer4';
import { Layer5 } from './components/layer5/layer5';
import { Layer6 } from './components/layer6/layer6';


function App() {
  return (
    <div className="App">
      < Menu />
      < Layer1 />
      < Layer2 />
      < Layer3 />
      < Layer4 />
      < Layer5 />
      < Layer6 />
    </div>
  );
}

export default App;
