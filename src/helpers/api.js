import axios from 'axios';

// Function to fetch data from the API
export const fetchClaimDetails = async (user) => {
  const url = `http://localhost/gccApi/claimDetail.php?user=${user}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 200) {
      console.log("Data Fetched Successfully", response.data);
      // Handle the response data as needed
      return response.data;
    } else {
      console.error("Error:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
};


