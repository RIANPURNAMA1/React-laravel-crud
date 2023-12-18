import React, { useState } from 'react';
import axios from 'axios';

export default function Tambah() {
  // Step 1: Add State
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
  });

  // Step 2: Handle Form Input Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 3: Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 4: Make API Request
      await axios.post('http://localhost:8000/api/pegawai', formData);
      // Optionally, you can redirect or show a success message
      window.location.href = "/data"
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className='container my-4'>
      <h2>Tambah Data</h2>
      <div className='row'>
        <div className='col-7'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='nama'>Nama Lengkap</label>
              <input
                type='text'
                name='nama'
                id='nama'
                className='form-control'
                value={formData.nama}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className='btn btn-success my-2'>
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
