const GreetBasedOnTime = () : string => {

    const currentHour = new Date().getHours();
    
    if(currentHour >= 5 && currentHour < 11) {
        return 'Chào buổi sáng';
    }else if(currentHour > 11 && currentHour < 14) {
        return 'Chào buổi trưa';
    }else if(currentHour > 14 && currentHour < 18) {
        return 'Xin chào';
    }else if(currentHour > 18 && currentHour < 24) {
        return 'Chào buổi tối'
    }else if(currentHour == 0 && currentHour <= 1 ) {
        return 'Ngủ ngon nhé😴';
    }else{
        return 'Xin chào';
    }
}
function formatDate(): string {
    const months: string[] = [
        'thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 
        'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'
    ];

    const date: Date = new Date();
    const day: number = date.getDate();
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();

    return `${day} ${month} ${year}`;
}
export default {
    GreetBasedOnTime,
    formatDate
}