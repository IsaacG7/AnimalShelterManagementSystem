import './AnimalModal.css';
import { useState } from 'react';

function AnimalModal({ animal, onClose, onAdopt, onHealth }) {

    const [isFavorite, setIsFavorite] = useState(false);

    if (!animal) return null;

  return (
      <div className="animal-modal-overlay">

          <div className="animal-modal">

              {/* Modal Header */}
              <div className="animal-modal-header">

                  <button onClick={onClose}>
                    X
                  </button>

                  <button onClick={onAdopt}>
                      Adopt
                  </button>

              </div>

              {/*Animal Information*/}
              <div className="animal-modal-content">

                  <div className="animal-profile">

                      <div className="animal=photo">

                          {animal.imageUrl ? (
                              <img
                                  src={animal.imageUrl}
                                  alt={animal.name}
                              />
                          ) : (
                              <div className="no-animal-photo">
                                  <span>No Photo Available</span>
                              </div>
                          )}

                      </div>

                      <div className="animal-details">

                          <div className="animal-name-container">

                              <h2>{animal.name}</h2>

                              <button
                                  className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                                  onClick={() => setIsFavorite(!isFavorite)}
                                  aria-label="Toggle Favorite">

                                  ★

                              </button>

                          </div>

                          <p>{animal.species}</p>
                          <p>{animal.breed}</p>
                          <p>{animal.gender}</p>
                          <p>{animal.weight} lbs</p>
                          <p>Date of Birth: {animal.dateOfBirth}</p>

                      </div>

                  </div>

                  {/*description*/}
                  <div className="animal-description">

                  <h3>Description</h3>
                  <p>{animal.description}</p>

                  </div>

                  {/*Medical information*/}
                  <div className="animal-health-information">

                  <h3>Medical Information</h3>

                      <div className="health-grid">

                          <div className="health-card">

                              <h4>Vacinations</h4>
                              {animal.vaccinations?.length > 0 ? (
                                  <ul>
                                      {animal.vaccinations.map((vaccination, index) => (
                                          <li key={index}>
                                              {vaccination}
                                          </li>
                                      ))}
                                  </ul>
                              ) : (
                                  <p>No vaccination records.</p>
                              )}

                          </div>

                          <div className="health-card">

                              <h4>Vacinations</h4>
                              {animal.dietaryRestrictions?.length > 0 ? (
                                  <ul>
                                      {animal.dietaryRestrictions.map((dietaryRestrictions, index) => (
                                          <li key={index}>
                                              {dietaryRestrictions}
                                          </li>
                                      ))}
                                  </ul>
                              ) : (
                                  <p>None reported.</p>
                              )}

                          </div>

                          <div className="health-card">

                              <h4>Altered status</h4>
                              {animal.isFixed ? 'Fixed' : 'Not fixed'}

                          </div>

                          <div className="health-card">
                              <h4>Behavioral Details</h4>
                              <p>
                                  {animal.behavioralDetails || 'No details reported.'}
                              </p>
                          </div>

                      </div>

                      <div className="special-care">

                          <h4>Special Care Instructions</h4>
                          <p>

                              {animal.specialCareDetails || 'No special care instructions reported.'}

                          </p>

                      </div>

                  </div>

              </div>

          </div>

      </div>
  );
}

export default AnimalModal;