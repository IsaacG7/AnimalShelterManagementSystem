import './AdoptionModal.css';

function AdoptionModal({ onClose }) {
  return (
      <div className="modal-overlay">

          <div className="modal-content">

              <button
                  className="modal-close"
                  onClick={onClose}>
                  X
              </button>

              <h2>Adoption Application</h2>
              <p>Please fill out the application.</p>

          </div>

      </div>
  );
}

export default AdoptionModal;