let findTheOldest = function(people) {
    return people.reduce(oldestPerson);
}

function oldestPerson(oldest,currentPerson){
    currentOldestAge = calcAge(oldest.yearOfBirth, oldest.yearOfDeath);
    currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return currentAge > currentOldestAge ? currentPerson : oldest;
}

function calcAge(birth, death){
    death = typeof death == "undefined" ? new Date().getFullYear() :  death;
    return death-birth;
}

module.exports = findTheOldest
