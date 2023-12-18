import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams(); // Menangkap parameter ID dari URL
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/pegawai/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.log(error, "gagal");
      }
    }

    fetchData();
  }, [id]); // Memastikan useEffect dipanggil setiap kali ID berubah

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Kirim permintaan PUT ke API untuk menyimpan perubahan
    axios.put(`http://localhost:8000/api/pegawai/${id}`, formData)
      .then(response => {
        // Handle respons dari server jika diperlukan
        window.location.href="/data"
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <div className='container my-4'>
        <h2>Edit Data</h2>
        <div className="row">
          <div className="col-7">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nama">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className='form-control'
                  value={formData.nama}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className='form-control'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className='btn btn-success my-2'>Simpan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
