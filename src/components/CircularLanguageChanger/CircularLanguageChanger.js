import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateIntl} from 'react-intl-redux';
import ClickOutside from 'react-click-outside';
import TimesIcon from 'react-icons/lib/ti/times';
import * as translations from '../../translations';
import * as styledClasses from 'CircularLanguageChanger.css';

export class CircularLanguageChanger extends Component {
  static defaultProps = {
    isOpen: false,
    value: 'tr',
    options: Object.keys(translations),
  };
  
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    changeLanguage: PropTypes.func.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    const {isOpen} = this.props;
    if (nextProps.isOpen !== isOpen) {
      this.setState({isOpen: nextProps.isOpen});
    }
  }
  
  handleButtonClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  };
  
  handleOptionClick = value => {
    const {changeLanguage} = this.props;
    this.setState({isOpen: false}, () => changeLanguage(value));
  };
  
  render() {
    const {options, value} = this.props;
    const {isOpen} = this.state;
    return (
      <div className={styledClasses.CircularLanguageChanger}>
        <ClickOutside className={styledClasses.Wrapper}
                      onClickOutside={isOpen ? this.handleButtonClick : f => f}>
          
          <div className={styledClasses.Option} onClick={this.handleButtonClick} isOpen={isOpen}>
            {isOpen ? (<TimesIcon color="#FFF" size="1.2em"/>) : (<span>{value}</span>)}
          </div>
          {isOpen && (
            <div className={styledClasses.OptionsList}>
              {options.filter(option => option !== value).map(option => (
                <div className={styledClasses.Option}
                     key={option}
                     value={option}
                     onClick={() => this.handleOptionClick(option)}>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          )}
        </ClickOutside>
      </div>
    );
  }
}

const mapStateToProps = ({intl: {locale}}) => ({
  value: locale,
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: value =>
    dispatch(updateIntl({locale: value, messages: translations[value]})),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CircularLanguageChanger
);
