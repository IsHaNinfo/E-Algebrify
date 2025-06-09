export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Discussion {
    id: string;
    title: string;
    lesson: string;
    description: string;
    userId: string;
    user?: User;
    createdAt: string;
    updatedAt: string;
    replies: Reply[];
}

export interface Reply {
    id: string;
    content: string;
    userId: string;
    user?: User;
    discussionId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateDiscussionInput {
    title: string;
    lesson: string;
    description: string;
}

export interface CreateReplyInput {
    content: string;
    discussionId: string;
}