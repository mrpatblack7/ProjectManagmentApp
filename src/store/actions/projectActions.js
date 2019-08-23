//this file will handle updating the projects. Such as adding and deleting
//packages installed react-redux-firebase redux-firestore

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => { //dispatching an action to the reducer
        // make async call to database
        const firestore = getFirestore(); //evoke function to referrence firestore database
        firestore.collection('projects').add({
            ...project, // this is called "spread operator"
            authorFirstName: "Pat",
            authorLastName: "Black",
            authorId: 12345,
            createdAt: new Date()
        }).then(() =>{
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
};