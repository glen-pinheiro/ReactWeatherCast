import React from 'react';
import {Link} from 'react-router';

/*export default React.createClass({
  render: function() {
    return (
      <h1>Demo Page</h1>
    );
  }
});*/

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Demo Page</h1>
      <p>Demo page for testing.</p>
      <ol>
        <li>
          <Link to="/?location=Kargil">Kargil</Link>
        </li>
        <li>
          <Link to="/?location=Goa">Goa</Link>
        </li>
      </ol>
    </div>
  )
};

export default Examples;
