import { Mynames, strings } from "./arrayManipulation.js";


function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    };
  });
}

const profiles = createUserProfiles(Mynames, strings);
console.log(profiles);