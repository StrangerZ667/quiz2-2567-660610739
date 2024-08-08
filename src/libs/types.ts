// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath: string;
    username: string;
    replyTitle: string;
    likes: number;
}
export type { ReplyProps };

interface CommentProps {
    username: string;
    ImagePath: string;
    commentTitle: string;
    likes: number;
    replies: ReplyProps[];
}
export type { CommentProps };

interface PostOwnerProps {
    username: string;
    userImagePath: string;
    Text: string;
    like: number;
}
export type { PostOwnerProps };
