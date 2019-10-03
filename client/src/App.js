import React from 'react';
import { Route } from 'react-router-dom'; 

import Header from './components/header/header.compoent';
import Home from './pages/home/home';
import Footer from './components/footer/footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
      <Header currentUser={this.state.currentUser} />
      <Route exact path='/' component={Home} />
      <Route exact path='/:category' component={Home} />
      {/* <Route exact path={`/:${category}`} component={Home} /> */}
      <Footer />
    </>
    );
  }
}

export default App;