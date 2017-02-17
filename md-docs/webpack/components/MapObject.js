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
  defaultValue(defaultValue) {
    console.log(defaultValue)
    if (defaultValue) {
      return '(Default: `' + defaultValue + '`)'
    }
  }
  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
          <strong style={styles.object}>{this.props.mykey}</strong>
          ({this.props.type}):
          <span style={styles.description}> {this.props.description} {this.defaultValue(this.props.default)}</span>
        </div>
        <span style={this.state.collapsed ? styles.hidden : styles.active}>
          <ul>
            {this.props.children}
          </ul>
        </span>
      </div>
    );
  }
}

const styles = {
  listItem: {
    listStyle: 'none',
  },
  description: {
    fontSize: '15px'
  },
  object: {
    color: '#0F4C93'
  },
  active: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  },
};
