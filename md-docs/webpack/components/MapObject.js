import React, {Component}  from 'react';

export default class MapObject extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    }
  }
  onClick() {
    this.setState({collapsed: !this.state.collapsed});
  }
  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
          <strong className="object">{this.props.mykey}</strong>
          ({this.props.type}):
          <span className="description">{this.props.description}</span>
        </div>
        <span className={this.state.collapsed ? 'hidden' : 'active'}>
          <ul>
            {this.props.children}
          </ul>
        </span>
      </div>
    );
  }
}
