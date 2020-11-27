

import { myFetch } from "./my-fetch";



export function getExerciseList() {
    return myFetch('exercise_types');
}

export function delExerciseType(id){
    return myFetch('exercise_types/delete/' + id);
}

export function addExerciseType(Name, Type, Muscle_group, Relative_Difficulty){
    return myFetch('exercise_types/add', {Name: Name, Type: Type, Muscle_group: Muscle_group, Relative_Difficulty: Relative_Difficulty});
}