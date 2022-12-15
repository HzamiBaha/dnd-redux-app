

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteEmploye, } from '../features/employes/employeSlice'
import Avatar from './Avatar'

function EmployeItem({ employe }) {

  const dispatch = useDispatch()



  return (
    <div className='employe'>
      <Avatar name={employe.name} lastname={employe.lastname} />
      <div className='informations'>
        <h4 className='employe-name'>{employe.name} {employe.lastname}</h4>
        <h5 className='employe-function'>{employe.profession} {employe.grad}</h5>
      </div>

      <button onClick={() => dispatch(deleteEmploye(employe._id))} className='close'>
        X
      </button>


      <Link to={{ pathname: `/payment/${employe._id}`, state: employe }}>
        <button className='more'>
          {'>'}
        </button>
      </Link>

    </div>
  )
}

export default EmployeItem
