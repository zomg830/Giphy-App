import React from "react";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, animated: false };

    this.itemRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.itemRef);
    this.itemRef.current.addEventListener("load", this.setSpans);
    console.log(this.props.item);
  }

  setSpans = () => {
    const height = this.itemRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  render() {
    const item = this.props.item;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.itemRef}
          alt={item.description}
          src={item.urls.regular}
        />
      </div>
    );
  }
}

export default LolboxCard;