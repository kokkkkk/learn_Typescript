type Viewer = {
    viewerName: string;
    email: string;
    viewCount: number;
    isSubscribed: boolean;
}

function createNewViewer(viewer: Viewer){

}

//Extending Aliases

type superFan = Viewer & {
    isSuperFan: boolean;
}