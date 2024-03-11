import ServerPost from '../CustomeHooks/ServerPost'
//import ServerGet from '../CustomeHooks/ServerGet'
function HandleServer(obj, location) {
    switch (location){
        case "delete": // deletes an item
           return ServerPost(obj,"api/delete")
            
        case "Add Item": // adds an item to a list
            return ServerPost(obj,'api/products')
        case "New User": // creates a new user
            return ServerPost(obj,'api/newUser')
            
        case "Get User": // gets a users info
            return ServerPost(obj, 'api/findUser')
        case "Lists"://not very secure but works
            return ServerPost(obj,'api/getUserList') // obj == username
        case "Get List": // returns whats in a given list
            const products = ServerPost(obj, 'api/list')
            return products
        case "Make List": 
            return ServerPost(obj, 'api/Makelist')
        case "Total List": // returns all the lists
            const val = ServerPost(obj, 'api/TotalList')
            return val
        case "Total Category": 
            return ServerPost(obj, 'api/TotalCategory')
        case "Category Names": 
            return ServerPost(obj, 'api/Category')
        case "Delete List":
            return ServerPost(obj, 'api/DeleteList')
        case "Update Budget"://updates a given users budget
           return ServerPost(obj,'api/updateBudget') // obj == username, budget
        case "Get Budget"://returns a given users budget
           return ServerPost(obj,'api/Getbudget') // obj == username
        case "Sort List":
            return ServerPost(obj, 'api/SortedList')
        case "Get Info User":
            return ServerPost(obj,'api/ReturnUser')
        case "Update User Info":
            return ServerPost(obj,'api/ModifyUser')
        case "Get User Name":
            return ServerPost(obj,'api/GetUserName')
        case "Delete list and items":
            Promise.all([
                ServerPost(obj, 'api/deleteItems'),
                ServerPost(obj, 'api/DeleteList')
            ]).then(responses => {
                // Handle responses if needed
                console.log("Both requests completed successfully", responses);
            }).catch(error => {
                // Handle errors from either request
                console.error("An error occurred:", error);
            });
            return null; // or loading indicator if needed
        
        case "Delete list and remove items from list":
            Promise.all([
                ServerPost(obj, 'api/RemoveList'),
                ServerPost(obj, 'api/DeleteList')
            ]).then(responses => {
                // Handle responses if needed
                console.log("Both requests completed successfully", responses);
            }).catch(error => {
                // Handle errors from either request
                console.error("An error occurred:", error);
            });
            return null; // or loading indicator if needed
        case "Remove list name from items":
            return  ServerPost(obj, 'api/RemoveList')
        case "Delete items in list":
            return  ServerPost(obj, 'api/deleteItems')
        case "Edit Product":
            return ServerPost(obj,'api/')
         
        default:
            return null
    }
    
}

export default HandleServer