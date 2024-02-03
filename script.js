console.log("connected");

let post_btn = document.querySelector("#post-btn")

post_btn.addEventListener('click',(e)=>{

    let post_area = document.querySelector("#post-area").value;
    let posts_box = document.querySelector(".posts") //posts box
    let main_post = document.createElement('div');
    main_post.innerHTML = `<div class="main-post">
    <div class="post-main">
        <div class="prof-img">
            <img src="assets/profile_image.png" alt="#">
        </div>
        <div class="post-right">    
            <div class="post-det">
                <h4>Name</h4>
                <h5>@user</h5>
                <div class="post-right-btns">
                    <img src="assets/edit.png" alt="#">
                    <img src="assets/delete.png" alt="#" class="post-delete-btn">
                </div>
            </div>
            
            <div class="post-txt-area">
                <textarea name="post" id="post-area-text" cols="30" rows="10"  style="resize: none;">${post_area}</textarea>
            </div>
            
            <div class="like-cmnt-btns">
                <img src="assets/comment.png" alt="#" class= "comment-main-post">
                <img src="assets/heart.png" alt="#">
            </div>
        </div>
    </div>
    
    </div>`

    posts_box.appendChild(main_post);

})

let typed_length = document.querySelector("#post-area").innerText.length;
let retyped_length = document.querySelector('.count_of_char')

//deleting the post after clicking the delete button of the post using event delegation
let post = document.querySelector('.main-post')
console.log(typeof(post))
if(post !== null){
    post.addEventListener('click',(e)=>{
        let target = e.target;
        if(target.classList.contains('.post-delete-btn')){
            console.log('btn clicked')
            target.closest('main-post').remove();
        }
    })
}


//adding comments to the post when the comment button is clicked
let comment_btns = document.querySelectorAll('.comment-main-post')
console.log(typeof(comment_post));
comment_btns.forEach(element => {
    element.addEventListener('click',(e)=>{
        let target = e.target;
        let main_post = target.parentNode.parentNode.parentNode;
        let comment_post = main_post.createElement('div')
        comment_post.innerHTML = `<div class="comment-post">
        <div class="prof-img">
                <img src="assets/profile_image.png" alt="#">
            </div>
            <div class="post-right">    
                <div class="post-det">
                    <h4>Name</h4>
                    <h5>@user</h5>
                    <div class="post-right-btns">
                        <img src="assets/edit.png" alt="#">
                        <img src="assets/delete.png" alt="#">
                    </div>
                </div>
            
                <div class="post-txt-area">
                    <textarea name="post" id="post-area-text" cols="30" rows="10" disabled = "readonly"></textarea>
                </div>
            
                <div class="like-cmnt-btns">
                    <img src="assets/heart.png" alt="#">
                </div>
            </div>
        </div>`
        main_post.appendChild(comment_post);
    })
});



