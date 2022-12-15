import { Button, Container, Grid, Paper, styled, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useDispatch } from 'react-redux'
import { deleteEmploye, payEmploye } from '../features/employes/employeSlice'
import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'



const BlackButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',

    backgroundColor: '#000000',
    borderColor: '#000000',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#262626',
        borderColor: '#262626',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#262626',
        borderColor: '#262626',
    },
    '&:focus': {
        boxShadow: ' 0px 7px 29px 0px rgba(100, 100, 111, 0.2) ',
    },
});

const EmployeDetails = ({ employe }) => {
    const dispatch = useDispatch()
   
   //pay is currently causing a test failure 
    const pay = () => {
       // if(employe.id){
            dispatch(payEmploye({ id: employe._id }))
            toast(employe.name + " payment was sent succesfuly")
      //  }
        //else return
        
    }


    return (

        <Box data-testid="employe-details" className="box">
            <Paper sx={{ p: 4, borderRadius: 2 }}>
                <Avatar name={employe.name} lastname={employe.lastname} />

                <Grid Container sx={{
                    maxWidth: "50%",
                    margin: "auto"
                }}>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> name : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.name}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> lastname : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.lastname}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> age : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.age}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> grade : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.grade}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> profession : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.profession}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> departement : </Typography>
                            <Typography alignItems={'center'} textAlign='start'>{employe.departement}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                            <Typography variant='h6' fontWeight={600} color={'black'}> payment : </Typography>
                            <Typography  data-testid="payment" alignItems={'center'} textAlign='start'>{employe.payment ? "Payment Sent" : "Still waiting for payment ..."}</Typography>
                        </Stack>
                    </Grid>

                    <Link to={{ pathname: `/` }}>
                        {employe.payment ? <BlackButton disabled variant='contained' sx={{ margin: "20px 0px 0px 0px" }} onClick={pay} className='close'>
                            Already payed
                        </BlackButton> : <BlackButton  data-testid="pay-button" variant='contained' sx={{ margin: "20px 0px 0px 0px" }} onClick={pay} className='close'>
                            Pay
                        </BlackButton>}

                    </Link>
                    <ToastContainer />
                </Grid>

            </Paper>
        </Box >


    )
}

export default EmployeDetails