// Storing the BaseUrl in a variable
const baseURL = "https://backend.getlinked.ai";

// Async Function to fetch the categories
async function fetchCategories(){
    try{
        const response = await fetch(`${baseURL}/hackathon/categories-list`);
        const categories = await response.json();

        //Populating the Category select field
        const categorySelect = document.getElementById("category");
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;

            categorySelect.appendChild(option);
        })
    }
    catch(error) {
        console.error("Error fetching categories:", error)
    }
}
fetchCategories()

// Handling Form Submission
document.getElementById("registerationForm").addEventListener("submit", function(event){
    event.preventDefault()
});
const teamName = document.getElementById("teamName").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const topic = document.getElementById("projectTopic").value;
const groupSize = document.getElementById("groupSize").value;
const category = document.getElementById("category").value;

const data = {
    teamName: teamName,
    phone: phone,
    email: email,
    topic: topic,
    groupSize: groupSize,
    category: category
};

