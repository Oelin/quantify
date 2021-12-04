module.exports = set => {

    const some = predicate => {
 
	    for (let element of set) {
	        if (predicate(element)) return true
	    }

	    return false
    }

    const all = predicate => !some(x => !predicate(x))

    return { some, all }
}
