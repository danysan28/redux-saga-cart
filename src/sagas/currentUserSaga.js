export function* currentUserSaga(){
    // The example was with delay, but it's no longer use
    yield setInterval(() => console.log("User saga loop"), 1000);
}