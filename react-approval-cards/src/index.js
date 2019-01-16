import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

let generateAvatar = () => {
  return <img alt="avatar" src={Faker.image.avatar()} />;
}

let App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>  {/*text passed in as props to 'ApprovalCard'*/}
      <ApprovalCard>  {/*div passed in as props to 'ApprovalCard'*/}
        <div>
          <h4>Warning!</h4>
          <p>Proceed?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>  {/*Child component below passed in as props to 'ApprovalCard'*/}
        <Comment author="Sam" timeAgo="Today @ 4:00PM" text="Nice blog post!" avatar={generateAvatar()} />
      </ApprovalCard>
      <ApprovalCard>  {/*Child component below passed in as props to 'ApprovalCard'*/}
        <Comment author="Alex" timeAgo="Today @ 6:00PM" text="Nice blog post!" avatar={generateAvatar()} />
      </ApprovalCard>
      <ApprovalCard>  {/*Child component below passed in as props to 'ApprovalCard'*/}
        <Comment author="Jane" timeAgo="Today @ 2:45PM" text="Nice blog post!" avatar={generateAvatar()} />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("main"));
