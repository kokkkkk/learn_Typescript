export interface Viewer{
    viewerName: string;
    email?: string;
    viewCount: number;
    isSubscribed: boolean;
}

const recentViewer: Viewer = {
    viewerName: 'kokkkkk',
    email:"ko@gmail.com",
    viewCount:10,
    isSubscribed:true,
    isSuperFan:true
}

//Difference between Types and Interfaces

export interface Viewer{
    isSuperFan: boolean;
}

//Extend an interface

export interface Botviewer extends Viewer{
    isBot: Boolean;
}