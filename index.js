export default domain => {
    const exists = predicate => {
        for (let element of domain) {
            if (predicate(element)) return true
        }
        return false
    }
    const all = predicate => !exists(x => !predicate(x))
    
    return { all, exists }
}
