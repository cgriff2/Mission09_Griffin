import React from 'react';
import './App.css';

function App() {
  interface BandProps {
    name: string;
    members: string;
    formed: number;
  }

  const bandNames = [
    // JSON object
    {
      name: 'The Beastie Boys',
      members: 'Ad Rock, MCA, Mike D',
      formed: 1979,
    },
    {
      name: 'Wolfmother',
      members: 'Andrew Stockdale, Hamish Rosser, Bobby Poulton',
      formed: 2004,
    },
    {
      name: 'Cream',
      members: 'Eric Clapton, Jack Bruce, Ginger Baker',
      formed: 1966,
    },
    {
      name: 'Nirvana',
      members: 'Kurt Cobain, Dave Groul, Krist Novoselic',
      formed: 1987,
    },
  ];

  function Welcome() {
    return <h1>The Best Music Trio Ever</h1>;
  }

  class Band extends React.Component<BandProps> {
    render() {
      const oneBand = this.props;

      return (
        <div>
          <h2>{oneBand.name}</h2>
          <h3>{oneBand.members}</h3>
          <h3>{oneBand.formed}</h3>
        </div>
      );
    }
  }

  function BandList() {
    return (
      <div>
        {/* same thing as below
        <Band {...bandNames[0]} />
        <Band {...bandNames[1]} />
        <Band {...bandNames[2]} />
        */}

        {bandNames.map((bandNum) => (
          <Band {...bandNum} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <BandList />
      </header>
    </div>
  );
}

export default App;
