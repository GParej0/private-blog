export interface User {
    user: string;
    id: number;
}

export interface Post {
    id: number;
    name: string;
    body: string;
    published: boolean;
    userId: number;
    createdAt: string;
    updatedAt: string;
    user: User;
    comments: Comment[]
}

export interface Comment {
    id: number;
    name: string;
    body: string;
    postId: number;
    createdAt: string;
}

export interface CommentCardProps {
    comment: Comment;
    onDelete: (id: number) => void
}