'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Added !'
          );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Add to Cart'
    );
  }
}

const domContainer = document.querySelector('#add-to-cart');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

const domContainer1 = document.querySelector('#add-to-cart1');
const root1 = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));