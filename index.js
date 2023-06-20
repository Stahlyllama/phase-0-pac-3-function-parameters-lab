function introduction(name){
  return(`Hi, my name is ${name}.`);{
    return(introduction("Aki"));
    return(introduction("Samip"));
  }
   console.log (introduction());
}

function introductionWithLanguage(name, language){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);{
    return(introductionWithLanguage("Aki", "Embers.js"));
    return(introductionWithLanguage("Samip", "React"));
  }
  console.log(introductionWithLanguage());
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);{
    return introductionWithLanguageOptional("Gracie", "Python");
  }
  console.log(introductionWithLanguageOptional());
}

