export const getAllDoctors = async () => {
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

export const updateBookingData = async (id, updatedFields) => {
  try {
    const res = await fetch(`http://localhost:5500/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    });
    if (!res.ok) {
      throw new Error('Failed to update booking');
    }

    const data = await res.json();
    return data.acknowledged;

  } catch (error) {
    console.error('Error:', error);
  }
  
};

export const deleteBookingData = async (id) => {
  try {
    const res = await fetch(`http://localhost:5500/bookings/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete booking');
    }

    const data = await res.json();
    console.log(data.message);
    return data;

  } catch (error) {
    console.error('Error:', error);
  }
};

export const updateUserData = async (id, updatedFields) => {
  try {
    const res = await fetch(`http://localhost:5500/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    });

    if (!res.ok) {
      throw new Error('Failed to update user');
    }

    const data = await res.json();
    console.log(data.result.acknowledged);
    return data.result.acknowledged;

  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};