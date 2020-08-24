function EditSaveClicked()
{
    let editsave = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdateBody = document.getElementById("blogBody") ;
    if(editsave.textContent.includes('Edit'))
    {
        editsave.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdateBody.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px pink solid' ;
        UpdateBody.style.border = '1px pink solid' ;
    }
    else if(editsave.textContent.includes('Save'))
    {
        editsave.innerHTML = 'Edit <i style="font-size: 14px;font-weight: bolder;" class="fa fa-pencil-square-o" aria-hidden="true"></i>'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdateBody.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdateBody.style.border = '' ;
    }

}
let likes = 0 ;
function incrementLikes()
{   document.getElementById('likeText').innerHTML = 'Liked';
    likes = likes + 1 ;
    let updateCount = document.getElementById('like-count-update') ;
   if(likes === 1)
   {
       updateCount.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    updateCount.innerHTML =`${likes} people have like this !` ;
   }
}

function addComment(){
    var postedComment = document.getElementById("txtCommentPost");
  var x = postedComment.addEventListener("onchange", function(){
    postedComment.innerHTML;
  });

  var x = postedComment.value;
  var pElement = '<p class="addedComment">'+ x + '</p>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}