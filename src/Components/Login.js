import React from "react";

class Login extends React.Component {
  render() {
    return (
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
                Login Form
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
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input className="form-control" id="email" type="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                  />
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
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
