import axios from 'axios';
// Post contact from data.
export const postContactForm = async (message) => {
  console.log({ message });
  const baseUrl = 'https://www.fisicalfitness.co.uk/assets/';
  const apiUrl = 'request.php';
  const url = baseUrl + apiUrl;
  await axios
    .post(url, message)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};
