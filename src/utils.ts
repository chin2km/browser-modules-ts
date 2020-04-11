
export const addAll = (...rgs: number[]) => rgs.reduce((acc, x) => acc+x, 0);

export const getDateTime = () => {
    const date = new Date();
    return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    }
}