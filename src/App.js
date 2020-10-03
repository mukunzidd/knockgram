import React, { useState } from 'react';
import Title from './components/Title';
import { ImgUploadForm } from './components/ImgUploadForm';
import { ImgGrid } from './components/ImgGrid';
import { ImgModal } from './components/ImgModal';

function App() {
  const [selectedImg, setSelecteImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <ImgUploadForm />
      <ImgGrid setSelectedImg={setSelecteImg} />
      {selectedImg && (
        <ImgModal selectedImg={selectedImg} setSelectedImg={setSelecteImg} />
      )}
    </div>
  );
}

export default App;
