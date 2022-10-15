import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from './firebase/firebase.init'

const auth = getAuth(app);

function App() {

  const googleSignInProvider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleSignInProvider).then(result => {
      console.log(result.user)
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>GOOGLE SIGN IN</button>
    </div>
  );
}

export default App;
