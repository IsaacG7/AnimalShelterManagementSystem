import './AnimalFilters.css';

function AnimalFilters() {
  return (
      <div className="AnimalFilters">
          <h2>Fitler Animals</h2>

          <div className="filter-selection">

              <label>

                  <input type="checkbox" />
                  Favorites

              </label>

              <h3>Species</h3>
              <label>

                  <input type="checkbox" />
                  Dog

              </label>
              <label>

                  <input type="checkbox" />
                  Cat

              </label>

          </div>

          <div className="filter-selection">

              <h3>Gender</h3>
              <label>

                  <input type="checkbox" />
                  Male

              </label>
              <label>

                  <input type="checkbox" />
                  Female

              </label>

          </div>

          <div className="filter-selection">

              <h3>Age</h3>
              <label>

                  <input type="checkbox" />
                  Young

              </label>
              <label>

                  <input type="checkbox" />
                  Adult

              </label>
              <label>

                  <input type="checkbox" />
                  Senior

              </label>

          </div>

          <div className="filter-selection">

              <h3>Size</h3>
              <label>

                  <input type="checkbox" />
                  Small

              </label>
              <label>

                  <input type="checkbox" />
                  Medium

              </label>
              <label>

                  <input type="checkbox" />
                  Large

              </label>

          </div>
          


      </div>
  );
}

export default AnimalFilters;