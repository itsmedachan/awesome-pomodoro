'use strict';

let nowTime = new Date();
let nowHour = nowTime.getHours();
let nowMin  = nowTime.getMinutes();
let nowSec  = nowTime.getSeconds();
let time_title = nowHour + ":" + nowMin + ":" + nowSec;
document.title = time_title;

const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);