function receivesAFunction(name) {
    return name()
}
receivesAFunction(function () {
    return newName
})


function returnsANamedFunction() {
    return function namedFunction() {
        return namedFunction

    }
}

function returnsAnAnonymousFunction() {
    return function (thing) {
        return thing
    }
}