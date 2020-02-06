const fetchData = async (searchTerm) => {
    const response = await axios.get("https://www.omdbapi.com/", {
        params: {
            apikey: 'afcfd597',
            s: searchTerm
        }
    });
    
    console.log(response.data);
};

const input = document.querySelector('input');
let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    };
    setTimeout(() => {
        fetchData(event.target.value)
    }, 1000);
    
};
input.addEventListener('input', onInput);