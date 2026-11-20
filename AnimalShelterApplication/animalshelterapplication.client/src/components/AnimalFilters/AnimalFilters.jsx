import './AnimalFilters.css';

function AnimalFilters({ onFilterChange }) {
  return (
      <div className="AnimalFilters">
          <h2>Fitler Animals</h2>

          <div className="filter-selection">

              <label>

                  <input type="checkbox"
                      id="Favorite"
                      value="Favorite"
                      onChange={onFilterChange} />
                  Favorites

              </label>

              <h3>Species</h3>
              <label>

                  <input type="checkbox"
                      id="species-dog"
                      value="Dog"
                      onChange={onFilterChange} />
                  Dog

              </label>
              <label>

                  <input type="checkbox"
                      id="species-cat"
                      value="Cat"
                      onChange={onFilterChange} />
                  Cat

              </label>

          </div>

          <div className="filter-selection">

              <h3>Gender</h3>
              <label>

                  <input type="checkbox"
                      id="gender-male"
                      value="Male"
                      onChange={onFilterChange} />
                  Male

              </label>
              <label>

                  <input type="checkbox"
                      id="gender-female"
                      value="Female"
                      onChange={onFilterChange} />
                  Female

              </label>

          </div>

          <div className="filter-selection">

              <h3>Age</h3>
              <label>

                  <input type="checkbox"
                      id="age-young"
                      value="Young"
                      onChange={onFilterChange} />
                  Young

              </label>
              <label>

                  <input type="checkbox"
                      id="age-adult"
                      value="Adult"
                      onChange={onFilterChange} />
                  Adult

              </label>
              <label>

                  <input type="checkbox"
                      id="age-senior"
                      value="Senior"
                      onChange={onFilterChange} />
                  Senior

              </label>

          </div>

          <div className="filter-selection">

              <h3>Size</h3>
              <label>

                  <input type="checkbox"
                      id="size-small"
                      value="Small"
                      onChange={onFilterChange} />
                  Small

              </label>
              <label>

                  <input type="checkbox"
                      id="size-medium"
                      value="Medium"
                      onChange={onFilterChange} />
                  Medium

              </label>
              <label>

                  <input type="checkbox"
                      id="size-large"
                      value="Large"
                      onChange={onFilterChange} />
                  Large

              </label>

          </div>
          


      </div>
  );
}

export default AnimalFilters;