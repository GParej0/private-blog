import type { CommentCardProps } from "../types"
export default function CommentCard({ comment, onDelete }: CommentCardProps) {
    return (
        <>
            <div className="commentCard">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <button className="btn-action delete" onClick={() => onDelete(comment.id)}>Delete</button>
            </div>
        </>
    )
}