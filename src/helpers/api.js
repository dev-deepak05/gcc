import axios from 'axios';

// Function to fetch data from the API
export const fetchClaimDetails = async (url) => {

  try {
    const response = await axios.get(url);
    if (response.data.status === 200) {
      return response.data;
    } else {
      console.error("Error:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
};


