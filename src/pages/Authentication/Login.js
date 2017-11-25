class Login extends Component {
  static propTypes = {
    intl: intlShape,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }
  
  handleFormSubmit = async values => {
    const { submitLogin, history, intl: { messages } } = this.props;
    localStorage.setItem('loginData', null);
    try {
      const { data: { login } } = await submitLogin({
        email: values.email,
        secretWord: values.password,
        reCaptchaResponse: 'mock',
        clientIp: '127.0.0.1',
      });
      if (login.status !== 'success') {
        this.setState({
          errorMessage: login.errorMessage,
        });
      } else {
        console.log('?_??');
        login.data.loginTimestamp = Math.ceil(new Date().getTime() / 1000);
        localStorage.setItem('loginData', JSON.stringify(login.data));
        history.push(`/dashboard`);
      }
    } catch (err) {
      this.setState({
        errorMessage: messages['label.genericError'],
      });
    }
  };
  
  render() {
    const { intl: { messages }, handleSubmit, submitting } = this.props;
    const { errorMessage } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>{messages['page.Login.title']}</title>
        </Helmet>
        {errorMessage && (
          <AuthMessage status="danger">{errorMessage}</AuthMessage>
        )}
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Field
            name="email"
            component={AuthField}
            type="text"
            placeholder={messages['form.authentication.email']}
          />
          <Field
            name="password"
            component={AuthField}
            type="password"
            placeholder={messages['form.authentication.password']}
          />
          <AuthButton type="submit" disabled={submitting}>
            <FormattedMessage id="page.Login.button" />
          </AuthButton>
          <AuthLink to="/auth/register">
            <FormattedMessage id="page.Login.registerLink" />
          </AuthLink>
          <AuthLink to="/auth/reset">
            <FormattedMessage id="page.Login.resetPasswordLink" />
          </AuthLink>
        </form>
      </div>
    );
  }
}

export