import React, { Component, StyleSheet } from 'react';
import config from './output.js';
import MapObject from './MapObject';
import TableView from './TableView';

class Hello extends Component {
  constructor() {
    super();
  this.state = {
      keys: [],
      props: {},
      selected: 'json-view'
    };
  }
  componentWillMount() {
    const props = config.properties;
    this.setState({keys: Object.keys(props), props: props});
    this.mapPropsToComponents(props);
  }
  onClick(key) {
    this.setState({selected: key});
  }
  mapPropsToComponents(props) {
    return Object.keys(props).map((key, index) => {
      const type = props[key].type;
      switch(type) {
        case 'object':
          return (
            <li key={key}>
              <MapObject mykey={key} type={type} description={props[key].description}>
                {this.mapPropsToComponents(props[key].properties)}
              </MapObject>
            </li>
          );
        default:
          return (
            <li key={key}>
              <strong>{key}</strong>
              ({props[key].type}): <span className="description">{props[key].description}</span>
            </li>
          );
      }
    })
  }
  showJSONView() {
    this.setState({selected: 'json-view'});
  }
  showTableView() {
    this.setState({selected: 'table-view'});
  }
  isActive(element) {
    return element === this.state.selected ? 'show' : 'hide';
  }
  render() {
    const items = this.mapPropsToComponents(this.state.props);
    return (
      <div className="App swagger-ui">
        <div className="links">
          <button onClick={this.showJSONView.bind(this)}>JSON view</button>
          <button onClick={this.showTableView.bind(this)}>Table view</button>
        </div>
        <br />
        <div className={this.isActive('table-view')}>
          <h2>Server Configuration</h2>
          <TableView config={this.state.props} />
          <h2>Database Configuration</h2>
          <TableView config={this.state.props.databases.properties.foo_db.properties} />
          <h2>CORS Configuration</h2>
          <TableView config={this.state.props.CORS.properties} />
          <h2>Cache Configuration</h2>
          <TableView config={this.state.props.databases.properties.foo_db.properties.cache.properties} />
          <h2>User Configuration</h2>
          <TableView config={this.state.props.databases.properties.foo_db.properties.users.properties.foo_user.properties} />
        </div>
        <div className={this.isActive('json-view')}>
          {'{'}<ul className="list">
            {items}
            </ul>{'}'}
        </div>
      </div>
    );
  }
}



export default Hello;
