import { useEffect, useState } from 'react';
import {
  projectStorage,
  projectFirestore,
  projectTimestamp,
} from '../firebase/config';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //   Refs
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err.message);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = projectTimestamp();
        setUrl(url);
        collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, url, error };
};
