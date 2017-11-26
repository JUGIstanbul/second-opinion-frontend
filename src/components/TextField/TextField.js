import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hintText: this.props.hintText,
      type: this.props.type,
      value: this.props.value,
      errorText: this.props.errorText,
      onChange: this.props.onChange,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText={this.state.hintText}
          type={this.state.type}
          errorText={this.state.errorText}
        />
      </div>
    );
  }
}
