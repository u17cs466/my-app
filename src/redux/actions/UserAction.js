export const updateFirstName = (firstName) =>{
    return({
        type: 'UPDATE_FIRST_NAME',value:firstName
    })
} 


export const updateLastName = (lastName) =>{
    return({
        type:"UPDATE_LAST_NAME",
        value:lastName
    })
}