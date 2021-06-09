import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

const useContent = target => {
  const { firebase } = useContext(FirebaseContext);
  const [content, setContent] = useState(JSON.parse(localStorage.getItem(target)));

  const getFirebaseContent = async () => {
    try {
      if (content) {
        setContent(content);
        return;
      }
      const snapshot = await firebase.firestore().collection(target).get();
      const allContent = snapshot.docs.map(contentObj => ({
        ...contentObj.data(),
        docId: contentObj.id,
      }));
      localStorage.setItem(target, JSON.stringify(allContent));
      setContent(allContent);
    } catch (err) {
      localStorage.removeItem(target);
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFirebaseContent();
  }, []);

  return { [target]: content };
};

export default useContent;
