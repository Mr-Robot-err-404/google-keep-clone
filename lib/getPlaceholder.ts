export function getPlaceholder(newLabel: string) {
    const arr = newLabel.split("")
    arr.splice(13, arr.length - 1, "...")
    const str = arr.join("")
    return str
}