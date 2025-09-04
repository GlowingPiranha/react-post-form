import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  })

  const [alert, setAlert] = useState({ show: false, type: "", message: "" })

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };


    setFormData(newFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log("Errore nell'effettuare la chiamata: " + err)
      });
  };



  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="col-7 col-md-9 text-center">
            <h3>Form Request</h3>

            {alert.show && (
              <div className={`alert alert-${alert.type}`} role="alert">
                {alert.message}
              </div>
            )}

            <div className="card">
              <form className='p-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Autore</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Inserisci l'autore"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Titolo</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Inserisci il titolo"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea
                    name="body"
                    className="form-control"
                    placeholder="Scrivi il contenuto del post"
                    rows="4"
                    value={formData.body}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="public"
                    className="form-check-input"
                    onChange={handleChange}
                    checked={formData.public}
                  />
                  <label className="form-check-label">Public?</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Post
                </button>
              </form>

            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default App
