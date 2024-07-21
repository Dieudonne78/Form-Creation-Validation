const fetchUserData = async() => {
const apiUrl  = 'https://jsonplaceholder.typicode.com/users'
const dataContainer = document.getElementById('api-data');

try {
  const response = await fetch(apiUrl);
  const users = await response.json();
  dataContainer.innerHTML = '';
  const userList = document.createElement('ul');

  users.forEach(user => {
  const userLi = document.createElement('li');
  userLi.textContent = user.name
  userList.append(userLi);
    
  });

  dataContainer.append(userList)

} catch (error) {
  dataContainer.innerHTML = '';
  dataContainer.innerHTML = 'Failed to load user data.';
}
}

document.addEventListener('DOMContentLoaded',(Event)=>{
  fetchUserData();
})