document.addEventListener('DOMContentLoaded', () => {
    // Event listener for adding posts
    let post_btn = document.querySelector("#post-btn");
    post_btn.addEventListener('click', (e) => {
        let post_area = document.querySelector("#post-area").value;
        let posts_box = document.querySelector(".posts"); //posts box
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
                            <img src="assets/edit.png" alt="#" id = "edit-btn">
                            <img src="assets/delete.png" alt="#" class="post-delete-btn">
                        </div>
                    </div>
                    
                    <div class="post-txt-area">
                        <textarea name="post" id="post-area-text" cols="30" rows="10" disabled="readonly" style="resize: none;">${post_area}</textarea>
                    </div>
                    
                    <div class="like-cmnt-btns">
                        <img src="assets/comment.png" alt="#" class= "comment-main-post">
                        <img src="assets/heart.png" alt="#" class="like-btn">
                    </div>
                </div>
            </div>
        </div>`;
        posts_box.appendChild(main_post);
    });

    // Event listener for deleting posts
    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('post-delete-btn')) {
            window.alert("Are you sure you want to delete this post?");
            if (window.confirm){
                target.closest('.main-post').remove();
            }
        }
    });

    // Event listener for adding comments
    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('comment-main-post')) {
            let main_post = target.closest('.main-post');
            let comment_post = document.createElement('div');
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
                        <textarea name="post" id="post-area-text" cols="30" rows="10" disabled="readonly"></textarea>
                    </div>
                    <div class="like-cmnt-btns">
                        <img src="assets/heart.png" alt="#" class="like-btn">
                    </div>
                </div>
            </div>`;
            main_post.appendChild(comment_post);
        }
    });
    let clicked = false; // Initially, the button is not clicked

    // Event listener for liking posts
    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('like-btn')) {
            if (clicked) {
                target.src = "assets/heart.png"; // Toggle back to the original image
            } else {
                target.src = "assets/state_clicked.png"; // Toggle to the clicked image
            }
            clicked = !clicked; // Toggle the clicked state
        }
    });

    // Event listener for editing posts
    document.addEventListener('click', (e) => {
        if (e.target.matches('#edit-btn')) {
            let post_area = document.querySelector("#post-area-text");
            post_area.removeAttribute('disabled');
            post_area.focus();
        }
    });
});
