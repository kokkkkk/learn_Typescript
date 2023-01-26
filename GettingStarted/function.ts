function addViewer(viewers: number): number {
    return viewers*2;
}

addViewer(2);

function viewerProfile(userName:string, email:string,firstTime:boolean) : string {
    return userName + email + firstTime;
}