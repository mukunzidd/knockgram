import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';

export const ImgUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  //   const allowedTypes = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };
  return (
    <form>
      <label>
        <input
          type="file"
          className="label"
          accept="image/*"
          onChange={changeHandler}
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <p className="error">{error}</p>}
        {file && <p>{file.name}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
