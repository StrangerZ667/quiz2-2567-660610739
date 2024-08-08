// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface CommentProps {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: any;
}
export type { CommentProps };

interface PostOwnerProps {
    username: string;
    userImagePath: string;
    Text: string;
    like: number;
}
export type { PostOwnerProps };
