export const formTime = (number) => {
    const minutes = Math.floor(number / 60)
    const sec = number % 60
    return `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}