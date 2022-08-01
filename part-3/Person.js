function Person(props) {
    let voteMessage = props.age>= 18 ? "please, go vote!" : "you must be 18"
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
  return (
    <div>
      <p>Learn some information about this person.</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
      </ul>
      <ul>
        Hobbies
        {hobbies}
      </ul>
      <h3>{voteMessage}</h3>
    </div>
  );
}
