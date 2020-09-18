import React, { Component } from 'react';
import Header from './component/Header/index';
import Headline from './component/Headline/index';
import ShareButton from './component/Button/index';
import ListItem from './component/listitem/index';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@email.com',
    age: 24,
    onlineStatus: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    const configureButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };
    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline
            header='Posts'
            desc='Click the button to render posts'
            tempArr={tempArr}
          />
          <ShareButton {...configureButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configuListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configuListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(App);
