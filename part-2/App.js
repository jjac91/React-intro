function App() {
    return (
      <div>
        <Tweet 
        name="Sam Sampson"
        username="Sam"
        date={new Date().toDateString()}
        message="Not my hair!" />
        <Tweet 
        name="Sam Sampson"
        username="Sam"
        date={new Date().toDateString()}
        message="Not my hair!" />
        <Tweet 
        name="Sam Sampson"
        username="Sam"
        date={new Date().toDateString()}
        message="Not my hair!" />
      </div>
    );
  }