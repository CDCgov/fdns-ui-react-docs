import React, { Component } from 'react';
import Shape from './Shape';
const json = {
  "firstName": "First",
  "lastName": "Last",
  "email": "abc1@my.org",
  "avatar": "http://placehold.it/80x80.png",
  "org": "ABC/DEF/XYZ",
};

class ShapeUser extends Component {
  render() {
    const sampleProps = [
      {
        propName: 'firstName',
        propType: 'string',
        desc: 'This is the first name of the user.'
      },{
        propName: 'lastName',
        propType: 'string',
        desc: 'This is the last name of the user.'
      },{
        propName: 'email',
        propType: 'string',
        desc: 'This is the email of the user.'
      },{
        propName: 'org',
        propType: 'string',
        desc: 'This is the organization of the user.'
      },{
        propName: 'avatar',
        propType: 'string',
        desc: 'This is the URL of the avatar for the user.'
      },
    ];

    return (
      <Shape id="ShapeUser"
             name="_user"
             json={JSON.stringify(json)}
             sampleProps={sampleProps} />
    );
  }
}

export default ShapeUser;