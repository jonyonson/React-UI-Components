import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <span className="HeaderTitle__name">Lambda School </span>
      <span className="HeaderTitle__handle">@LambdaSchool</span> ·
      <span className="HeaderTitle__date">
        {` `}
        {moment()
          .format('DD MMM')
          .toLowerCase()}
      </span>
    </div>
  );
}

export default HeaderTitle;
