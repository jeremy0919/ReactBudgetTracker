import ServerPost from '../CustomeHooks/ServerPost'
import ServerGet from '../CustomeHooks/ServerGet'
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
        default:
            return null
    }
    
}

export default HandleServer