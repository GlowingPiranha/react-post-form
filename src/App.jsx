import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">


          <div className="col-7 col-md-9 text-center">
            <h3>Form Request</h3>
            <div className="card">


              <form className='p-3'>
                <div className="mb-3">
                  <label className="form-label">Author</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Inserisci l'autore"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Inserisci il titolo"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Body</label>
                  <textarea
                    name="body"
                    className="form-control"
                    placeholder="Scrivi il contenuto del post"
                    rows="4"
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="public"
                    className="form-check-input"
                  />
                  <label className="form-check-label">Pubblico?</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Invia Post
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
