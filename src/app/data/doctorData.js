export const getAllDoctors = async()=> {
  const res = await fetch(`${process.env.SERVER_URL}/doctors`)
  const data = await res.json()
  return data
}

export const getPersonalDoctorDataFromPathPage = async (id) => {
const res = await fetch(`http://localhost:5500/doctors/${id}`)
const data = await res.json();
return data;
}

export const getBookingData = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/bookings/${id}`)
  const data = await res.json()
  return data  
}