import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  })

  const [alert, setAlert] = useState(null)



  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">


          <div className="col-7 col-md-9 text-center">
            <h3>Form Request</h3>

            {alert && (
              <div className={'alert alert-${alert.type}'} role="alert">
                {alert.message}
              </div>
            )}

            <div className="card">
              <form className='p-3'>
                <div className="mb-3">
                  <label className="form-label">Autore</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    value={formData.author}
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
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="public"
                    className="form-check-input"
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
