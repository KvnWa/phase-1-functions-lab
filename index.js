// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return Math.abs((someValue - 42) * 264)
}

function distanceTravelledInFeet(start, destination) {
    let r = Math.abs((destination - start) * 264);
    return r;
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);

    if (feetDistance <= 400) {
        return 0;
    }
    else if (feetDistance >= 2500) {
        return `cannot travel that far`;
    }
    else if (feetDistance >= 2000) {
        return 25;
    }
    else if (feetDistance <= 2000) {
        return (feetDistance-400) * 0.02;
    }
    }
