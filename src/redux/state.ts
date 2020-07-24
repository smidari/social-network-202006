export type PostType = {
    id: number
    message: string
    likeCount: number
};
export type DialogType = {
    id: number
    name: string
};
export type MessageType = {
    id: number
    message: string
};
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText:string
};
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
};
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
};


let rerenderEntireTree =(state: RootStateType) => {

};

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you', likeCount: 10},
            {id: 2, message: 'its my first posts', likeCount: 23},
            {id: 3, message: 'hi', likeCount: 3},
            {id: 4, message: 'its my first postsfsfsdfsdfsdfs', likeCount: 5},
        ],
        newPostText: 'it camasutra'
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur'},
            {id: 3, message: 'Lorem ipsum dolor sit'},
            {id: 4, message: 'Lorem ipsum dolor sit, Lorem ipsum dolor sit, Lorem ipsum dolor sit'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Dasha'},
            {id: 5, name: 'Svetlana'},
            {id: 6, name: 'Valera'}
        ],
    },
};

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
};
export const subscribe = (observer:any) => {
    rerenderEntireTree = observer;
};
export default state;

