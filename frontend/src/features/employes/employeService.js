import axios from 'axios'

const API_URL = '/api/employes/'

// Create new employe
const createEmploye = async (employeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, employeData, config)

  return response.data
}

// update an employe
const updateEmploye = async (employeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + 'update', employeId, config)

  return response.data
}

// update an employe
const payEmploye = async (employeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + 'pay', employeId, config)

  return response.data
}

// update an employe
const updateAllEmployes = async (newemployes, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'updateAll', newemployes, config)

  return response.data
}

// get an employe
const getEmploye = async (employeId, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'getOne', employeId, config)

  return response.data
}



// Get user employes
const getEmployes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user employe
const deleteEmploye = async (employeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + employeId, config)

  return response.data
}

const employeService = {
  createEmploye,
  getEmployes,
  getEmploye,
  updateEmploye,
  updateAllEmployes,
  deleteEmploye,
  payEmploye,
}

export default employeService
