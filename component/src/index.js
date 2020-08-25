import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 PM"
                    avatar={faker.image.avatar()}
                    content="nice!"
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:00 AM"
                    avatar={faker.image.avatar()}
                    content="awesome!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

