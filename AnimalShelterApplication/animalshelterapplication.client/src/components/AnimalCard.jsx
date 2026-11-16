import './AnimalCard.css';

function AnimalCard({name, gender, age, weight, breed, picture, dateOfBirth, status}) {
  return (
    <div className="animal-card">
      <h3>{name}</h3>
      <p>{breed}</p>
      <p>{gender}, {age} years old</p>
      <p>Weight: {weight} lbs</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default AnimalCard;