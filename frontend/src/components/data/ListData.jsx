import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListData() {
  const [pegawai, setPegawai] = useState([]);


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/pegawai");
          setPegawai(response.data);
        } catch (error) {
          console.log(error, "gagal");
        }
      }

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/pegawai/${id}`);
      // Filter pegawai yang tidak termasuk ID yang dihapus
      setPegawai(pegawai.filter(item => item.id !== id));
      console.log('Data deleted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div className='container mt-5'>
      <h2>List Data</h2>
      <Link to="/tambah" className='btn btn-success my-2'>Tambah Data</Link>
      <div className="row">
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {pegawai.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Hapus</button>
                <Link to={`/edit/${item.id}`} className='btn btn-info'>Edit</Link>
              </td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

            }
