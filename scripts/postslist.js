var trashModalPopup = document.getElementById('deletePostModal');
function deletePost(element){    
    trashModalPopup.style.display= 'block';
    console.log(element);
    document.getElementById('trash-button-yes').setAttribute('onClick', 'confirmDelete('+element.id+ ')');
}

function confirmDelete(element){
    console.log(element);
    var postCard = element.closest("div.card-post");
    postCard.style.display ='none';
    trashModalPopup.style.display= 'none';
}

function openFullPost() {
    location.href = "post.html";
}