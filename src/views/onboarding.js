import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Onboarding extends React.Component {

  continueAuth = async () => {
    console.log('continuing auth...')
    const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    window.location.href = `https://${auth0Domain}/continue?state=${state}`
  };

  render() {
    return (
      <div>
        <h1>Onboarding page</h1>
          This is where the onboarding form would go
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.continueAuth}
          >
            submit onboarding page
          </button>
      </div>
    );
  }
}

export default withAuth0(Onboarding);
