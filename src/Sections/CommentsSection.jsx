import React,{useState} from 'react'


import '../styles/comment.css'
function CommentsSection() {
    const [comments, setComments] = useState([
        {id:1, userImg: '../../Magazine/ryan.png', alt:'ryan', userName: 'Ryan Hall', commentDate: 'July 17, 6:38 pm', commentText:"In the event, \"in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments", commentLike: +10},
        {id:2, userImg: '../../Magazine/anderson.png', alt:'anderson', userName: 'Lora Morrow', commentDate: 'July 17, 6:41 pm', commentText:"Likewise, most states in the Persian Gulf were handed over to those who could protect and safeguard imperial interests in the post-withdrawal phase", commentLike: 0, commentClass: 'anderson'},
        {id:3, userImg: '../../Magazine/tara.png', alt:'tara', userName: 'Tara Stark', commentDate: 'July 17, 6:53 pm', commentText:"French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and Laos. Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in 1887, the Indochinese Union was established.", commentLike: -3},
        {id:4, userImg: '../../Magazine/kris.png', alt:'kris', userName: 'Kris Robertson', commentDate: 'July 17, 7:12 pm', commentText:"Indian Marxist scholar Vivek Chibber has critiqued some foundational logics of Postcolonial Theory in his book Postcolonial Theory and the Specter of Capital", commentLike: 0}
    ])
    return (
        <section className="comment">
            <div className="container">
                <main className="comment_wrapper">
                    <figure className="comment_header">
                        <figcaption className="comment_19">
                            <h1>Comments</h1>
                            <article className="ml_5">19</article>
                        </figcaption>
                        <figcaption className="add_comment">
                            <img src="../../Magazine/Pencil.svg" alt="Pencil"/>
                            <article>Add comment</article>
                        </figcaption>
                    </figure>
                    <figure className="comment_body">
                        {
                            comments.map(comment => 
                                
                                <div key={comment.id} className="comment_body_card">
                                    <div className="comment_body_card_left">
                                        <img className={comment.commentClass} src={comment.userImg} alt={comment.alt}/>
                                    </div>
                                    <div className="comment_body_card_right">
                                        <figure className="comment_body_card_right_header">
                                            <figcaption>{comment.userName}</figcaption>
                                            <article className="ml_5">{comment.commentDate}</article>
                                        </figure>
                                        <figure className="comment_body_card_right_body">
                                            <p>{comment.commentText}</p>
                                        </figure>
                                        <footer className="comment_body_card_right_footer">
                                            <img src="../../Magazine/Comment.png" alt="Comment"/>
                                            <figcaption className="ml_2">Reply</figcaption>
                                            <img className="ml_15" src="../../Magazine/Thumb.png" alt="Thumb"/>
                                            <article className="ml_10">{comment.commentLike}</article>
                                            <img className="ml_10" src="../../Magazine/Thumbun.png" alt="Thumbun"/>
                                        </footer>
                                    </div>
                                </div>
                                
                                
                                )
                        }
                    </figure>
                    <footer className="comment_footer">
                        <article>
                            <img src="../../Magazine/Loading.png" alt="Loading"/>
                            <span className="ml_10">Load more</span>
                        </article>
                        <figure className="footer_card">
                            <div className="footer_card_left">
                                <img src="../../Magazine/image-193.png" alt=""/>
                            </div>
                            <div className="footer_card_right">
                                <article>What do you think?</article>
                                <div className="footer_card_right_comment_input">
                                    <div className="footer_card_right_comment_input_child"></div>
                                </div>
                                <button className="submit_btn">
                                    <span>Submit</span>
                                    <img className="ml_5" src="../../Magazine/Arrow.png" alt="Arrow"/>
                                </button>
                            </div>
                        </figure>
                    </footer>
                </main>
            </div>
        </section>
    )
}

export default CommentsSection
