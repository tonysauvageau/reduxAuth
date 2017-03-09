import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class Auth extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, props: { dispatch, router, location: { pathname } } } = this; // values destructured from this.props

    $.ajax({
      url: `/api/auth/${pathname}`,
      type: 'POST',
      data: { email: email.value, password: password.value }
    }).done ( user => {
      dispacth(refreshLogin(user));
      router.push('/dashboard');
    });
  }

  render() {
    let { route: { title } } = this.props;
    return (
      <div>
        <h2 className="center">{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            required
            ref={ n => this.email = n }
            placeholder="Enter your email"
            autocomplete="new-email"
          />
          <input
            type="password"
            required
            ref={ n => this.password = n }
            placeholder="password"
            autocomplete="new-password"
          />
          <button className="btn green lighten-4">{title}</button>
        </form>
      </div>
    )
  }
}

export default connect()(Auth);