import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmploye } from '../features/employes/employeSlice'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function EmployeForm({ open, onClose }) {

  const initialData = {
    name: '',
    lastname: '',
    grade: '',
    age: 20,
    departement: '',
    profession: '',
  }
  const [formData, setFormData] = useState(initialData)
  const { name, lastname, grade, age, departement, profession } = formData
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const employeData = {
      name, lastname, grade, age, departement, profession
    }
    dispatch(createEmploye(employeData))
    setFormData(initialData)
    onClose()
  }

  return (

    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Add New Employe
        </Typography>
        <section style={{ marginTop: "50px" }} className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  placeholder='Enter employe name'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe LastName</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastname'
                  name='lastname'
                  value={lastname}
                  placeholder='Enter employe lastname'
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Grade</label>
                <input
                  type='text'
                  className='form-control'
                  id='grade'
                  name='grade'
                  value={grade}
                  placeholder='Enter employe grade'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe Age</label>
                <input
                  type='number'
                  className='form-control'
                  id='age'
                  name='age'
                  value={age}
                  placeholder='Enter employe age'
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Departement</label>
                <select className='form-control' id='departement' name="departement" value={departement} onChange={onChange}>
                  <option value="" >Chose employe departement</option>
                  <option value="IT Department" >IT Department</option>
                  <option value="RH Department">RH Department</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe Profession</label>
                <input
                  type='text'
                  className='form-control'
                  id='profession'
                  name='profession'
                  value={profession}
                  placeholder='Enter employe profession'
                  onChange={onChange}
                />
              </div>

            </div>


            <div className='form-group'>
              <button className='btn btn-block' type='submit'>
                Add Employe
              </button>
            </div>
          </form>
        </section>
      </Box>
    </Modal>


  )
}

export default EmployeForm
