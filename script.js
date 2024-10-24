// script.js
function likePost(postId) {
    const likeCountSpan = document.getElementById(`like-count-${postId}`);
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
}

function toggleCommentBox(postId) {
    const commentSection = document.getElementById(`comment-section-${postId}`);
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentList = document.getElementById(`comments-list-${postId}`);

    if (commentInput.value.trim() !== '') {
        const newComment = document.createElement('li');
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = ''; // مسح المدخل بعد النشر
    } else {
        alert('الرجاء إدخال تعليق قبل النشر.');
    }
}
