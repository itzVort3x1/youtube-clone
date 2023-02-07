const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// personal API key
// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "458df08422msh679caedb4e53fa7p1f492ejsnf53b86b394ab",
// 		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
// 	},
// };

// team API key
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "b05ef24775msh7894123f693cbf7p1af116jsna08b2a7da01c",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url: string): Promise<any> => {
	return fetch(`${BASE_URL}/${url}&maxResults=50`, options)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.error(err);
			return err;
		});
};
