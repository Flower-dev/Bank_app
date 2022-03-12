import axios from "axios";

export default function useApi () {
    const urlApi = 'http://localhost:3001';
    // ajouter le lien vers le reducer comprenant le token

    function get(path, data = {}) {
		return axios
			.get(urlApi + path, {
				params: data,
                // headers: {ApiKey: token},
				responseType: `${'json'}`,
				withCredentials: false
			})
			.then((response) => response)
			.catch((error) => error.response);
	}

    function post(path, data, content = false) {
        let formData = new FormData();
        for(const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        if (content) {
            formData = data;
        }
        return axios
            .post(urlApi + path, formData, {
				// headers: { ApiKey: token },
				withCredentials: false
			})
			.then(
                (response) => response,
                (error) => error.response 
            )
			.catch((error) => console.error(error));
    }

    function del(path) {
        return axios
            .delete(urlApi, path, {
                // headers: { ApiKey: token },
                withCredentials: false
            })
            .then(
                (response) => response,
                (error) => error.response 
            )
			.catch((error) => console.error(error));
    }
    return { get, post, del }
}
