const app_id = "d74dc80a";
const app_key = "094d99f52626182ccb438668ebde8d89";
const button = document.querySelector("button");
const input = document.querySelector("input");

// creating a function getRecipe which will make a request to the endpoint
// and this function will take parameter called query and this query will be item whose recipe u want

const getRecipe = async (query) => {
    try {
      const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  

const searchRecipe = () => {
    const query = input.value;
    getRecipe(query);
  };
  
  button.addEventListener("click", searchRecipe);