var trashModalPopup = document.getElementById('deletePostModal');
function deletePost(element){    
    trashModalPopup.style.display= 'block';
    document.getElementById('trash-button-yes').setAttribute('onClick', 'confirmDelete('+element.id+ ')');
}

function confirmDelete(element){
    var postCard = element.closest("div.card-post");
    postCard.style.display ='none';
    trashModalPopup.style.display= 'none';
}

function openFullPost() {
    location.href = "post.html";
}

function closeTrashModal(){
    trashModalPopup.style.display= 'none';
}

window.onclick = function(event) {
if (event.target == trashModalPopup){
    trashModalPopup.style.display= 'none';
}
}