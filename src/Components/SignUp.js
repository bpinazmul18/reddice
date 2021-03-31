import React from "react";
import timeZones from "../data/TimeZone";
import _ from "lodash";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      timezones: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    const options = _.map(timeZones, (val, key) => (
      <option key={key} value={val}>
        {key}
      </option>
    ));

    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Registration Form
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="col-form-label">
                      UserName:
                    </label>
                    <input
                      onChange={this.handleChange}
                      name="username"
                      className="form-control"
                      id="username"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label">
                      Email:
                    </label>
                    <input
                      onChange={this.handleChange}
                      name="email"
                      className="form-control"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-form-label">
                      Password:
                    </label>
                    <input
                      onChange={this.handleChange}
                      name="password"
                      className="form-control"
                      id="password"
                      type="password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="repeat-password" className="col-form-label">
                      Repeat-Password:
                    </label>
                    <input
                      onChange={this.handleChange}
                      name="repeatPassword"
                      className="form-control"
                      id="repeat-password"
                      type="password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="timezone" className="col-form-label">
                      Timezone:
                    </label>

                    <select
                      className="form-control"
                      name="timezone"
                      onChange={this.handleChange}
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        Choose Your Timezone
                      </option>

                      {options}
                    </select>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
