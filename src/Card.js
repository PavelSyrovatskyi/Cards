import React,{Component} from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    }
  }
  handleActiveClick = () => {
    this.setState(state => {
      return {isActive: !state.isActive}
    })
  }

  render() {
    return (
      <div onClick={this.handleActiveClick} className={this.state.isActive ? "item-progress" : "item-active"}>
        <div className="title">{this.props.title}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div onClick={this.handleActiveClick} className={this.state.isActive ? "button-disabled" : "button-active"}> </div>
      </div>
    )
  }
}

export default Card;
