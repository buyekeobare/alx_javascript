#!/usr/bin/node

/**
a module named studentHogwarts:

It contains two variables privateScore set to 0, and name set to null
It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
The module gives access to four public methods (return an object):
setName, it takes into argument newName, and set the private variable name
rewardStudent, it calls the method changeScoreBy with 1
penalizeStudent, it calls the method changeScoreBy with -1
getScore, it returns name: score (ex: Harry: 14)
Create one variable named harry, that is an instance of studentHogwarts:

Set the name of the object to Harry
Reward the student four times
Log to the console the name and score
Create one variable named draco, that is an instance of studentHogwarts:

Sets the name of the object to Draco
Reward the student one time
Penalize the student three times
Log to the console the name and score
 */

function studentHogwarts(privateScore, name) {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
        return privateScore += points;
    };

    const setName = (newName) => {
        name = newName;
    };

    const rewardStudent = () => {
        changeScoreBy(1);
    };

    const penalizeStudent = () => {
        changeScoreBy(-1);
    };

    const getScore = () => {
        return `${name}: ${privateScore}`;
    };

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore,
    };
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());