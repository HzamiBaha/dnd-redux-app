import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import EmployeForm from '../components/EmployeForm'
import EmployeItem from '../components/EmployeItem'
import Spinner from '../components/Spinner'
import { getEmploye, getEmployes, reset } from '../features/employes/employeSlice'

import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import DragContext from '../components/DragContext'
import EmployeDetails from '../components/EmployeDetails'

function Payment() {

    const params = useParams()
    const id = params.id
    console.log(id)



    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { employes, isLoading, isError, message } = useSelector(
        (state) => state.employes
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
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

    const employe = employes.find(employe => employe._id === id)


    return (
        <>
            <section className='heading'>
                <h5> <span style={{ fontWeight: "400" }}>Payment Interface for </span>{employe.name}</h5>
            </section>
            <section>
                <EmployeDetails employe={employe} />
            </section>

        </>
    )
}

export default Payment
