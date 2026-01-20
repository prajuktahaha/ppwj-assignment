function bookTickets(eventName , seats ,  callback){
    const avseats = 5;
    if(seats > avseats){
        console.log("Booking failed");
    } 
    else{
        callback(eventName , seats);
    }
}
function myTicket (eventName , seats){
    console.log("Booking confirmed : "+seats , "seats for : "+eventName);
} 
bookTickets("Concert A" , 3 , myTicket);
bookTickets("Concert B" , 7 , myTicket);
