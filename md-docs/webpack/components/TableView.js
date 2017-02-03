import React, { Component } from 'react';

export default class TableView extends Component {
  componentWillMount() {
    console.log(Object.keys(this.props.config));
  }
  mapPropsToComponents(config) {
    return Object.keys(config).map((key, index) => {
      const type = config[key].type;
      switch (type) {
        case 'object':
          return (
            <tr></tr>
          );
        default:
          return (
            <tr>
              <td>{key}</td>
              <td>{config[key].type}</td>
              <td>{config[key].description}</td>
            </tr>
          )
      }
    })
  }
  render() {
    const items = this.mapPropsToComponents(this.props.config);

    return (
      <div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
