import React from 'react';
import { Route } from 'react-router-dom'; 

import { auth, createUserProfileDocument } from './firebase/firebase.util';

import Header from './components/header/header.compoent';
import Home from './pages/home/home';
import RoomDetail from './pages/room-detail/room-detail.component';
import Footer from './components/footer/footer.component';

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
        <div className='wrraper'>
          <Route exact path='/' component={Home} />
          <Route exact path='/:category' component={Home} />
          <Route exact path='/room-detail/:id' component={RoomDetail} />
        </div>
      <Footer />
    </>
    );
  }
}

export default App;