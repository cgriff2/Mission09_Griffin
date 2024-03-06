import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json'; // Import the JSON file

function Welcome() {
  return (
    <div>
      <h1>Check out the Colleges in NCAA Basketball</h1>
      <br />
      <img src="./" alt="down-chevron" />
    </div>
  );
}

function App() {
  interface CollegeProps {
    name: string;
    mascot: string;
    city: string;
    state: string;
  }

  // use map to iterate over the teamsData.teams array in the json file
  const collegeNames: CollegeProps[] = teamsData.teams.map((team: any) => ({
    name: team.school,
    mascot: team.name,
    city: team.city,
    state: team.state,
  }));

  // For each team, extract the relevant attributes and map them to the CollegeProps interface,
  // creating an object for each college.
  class College extends React.Component<CollegeProps> {
    render() {
      const oneTeam = this.props;

      return (
        <div className="college-container">
          <h2>{oneTeam.name}</h2>
          <h3>{oneTeam.mascot}</h3>
          <h3>
            {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      );
    }
  }

  // store the College objects in the collegeNames array, use the spread operator to
  // pass the college attributes as props to each College component
  function CollegeList() {
    return (
      <div className="college-list">
        {collegeNames.map((collegeNum) => (
          <College {...collegeNum} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
      <body>
        <CollegeList />
      </body>
    </div>
  );
}

export default App;
