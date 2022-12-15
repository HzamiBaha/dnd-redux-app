import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EmployeForm from '../components/EmployeForm'
import EmployeItem from '../components/EmployeItem'
import Spinner from '../components/Spinner'
import { getEmployes, reset } from '../features/employes/employeSlice'

import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import DragContext from '../components/DragContext'

function Dashboard() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { employes, isLoading, isError, message } = useSelector(
    (state) => state.employes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getEmployes())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h5>Welcome {user && user.name}</h5>
        <button className='btn' onClick={handleOpen}>
          <SendIcon /> Add New user
        </button>
      </section>
      <EmployeForm open={open} onClose={handleClose} />

      <section className='content'>
        {employes.length > 0 ? (
          <DragContext employes={employes} />
        ) : (
          <h3>You have not set any employes</h3>
        )}
      </section>

    </>
  )
}

export default Dashboard
