import React from 'react'
import Profile from 'assets/profile.jpeg'
export class Home extends React.Component {
  render (): React.ReactNode {
    return (
      <div>
        <img src={Profile} style={{ width: 100, margin: 5 }}/>
        <p>You have landed at the home page of Dror Atzmon.</p>
        <p>
          I am a human and a robot at the same time :)
        </p>
      </div>
    )
  }
}
