import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux'
import * as translations from '../../translations';
import Select from '../../components/Select';

class SwitchLocale extends Component {
  constructor(props) {
    super(props);

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(e) {
    const { updateLocale } = this.props;
    updateLocale({
      locale: e.target.value,
      messages: translations[e.target.value]
    });
  }

  render() {
    const { currentLocale } = this.props;
    return (
      <Select value={currentLocale} onChange={this.handleSwitch}>
        {Object.keys(translations).map(lang => <option key={lang} value={lang}>{lang}</option>)}
      </Select>
    );
  }
}

SwitchLocale.propTypes = {
  updateLocale: PropTypes.objectOf(PropTypes.string)
};

const mapDispatchToProps = (dispatch) => ({
  updateLocale: payload => dispatch(updateIntl(payload))
});

const mapStateToProps = (state) => {
  return {
    currentLocale: state.intl.locale
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchLocale);
