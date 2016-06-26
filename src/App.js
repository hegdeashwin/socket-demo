
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="sub-container">
            <div className="row">
              <div className="col-md-12">
                {this.props.children}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
