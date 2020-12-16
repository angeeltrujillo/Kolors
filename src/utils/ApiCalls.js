
export const originSuggestions = () => {
    console.log('Api call')
    fetch('https://run.mocky.io/v3/084fb9f7-706c-4f1c-aa94-fd352c59ad8a')
        .then((response) => response.json())
        .then((json) => {
            return json.data.originSuggestions
        })
        .catch((error) => console.error(error))
}
  
  