function NewCommentComponent(callback) {

     parent=document.getElementById('divPosts');
    this.container = document.createElement('div');
    this.container.id='obj1';
    this.container.classList.add('newPostView');
    parent.appendChild(this.container);

    this.btnCancel = document.createElement('div');
    this.btnCancel.classList.add("cancelBtn");
    this.btnCancel.innerHTML = "X";
    this.btnCancel.onclick = this.ocultar;
    this.container.appendChild(this.btnCancel);

    this.inputTitle = document.createElement("input");
    this.inputTitle.setAttribute('type', 'text');
    this.inputTitle.setAttribute('placeholder', 'Title');
    //this.inputTitle.setAttribute('id', (isEdit) ? 'inputTxtEditTitle' : 'inputTxtTitle');
    this.inputTitle.classList.add("postTitle");
    this.container.appendChild(this.inputTitle);

    this.inputBody = document.createElement("input");
    this.inputBody.setAttribute('type', 'text');
    this.inputBody.setAttribute('placeholder', 'Body');
    //this.inputBody.setAttribute('id', (isEdit) ? 'inputTxtEditBody' : 'inputTxtBody');
    this.inputBody.classList.add("postBody");
    this.container.appendChild(this.inputBody);

    var btnPost = document.createElement('div');
    btnPost.classList.add("postBtn");
    //btnPost.innerHTML = (isEdit) ? 'UPDATE' : 'POST';

    this.cancelar = cancelar;
    //btnPost.onclick = (isEdit) ? this.onClickSentPostCallback.bind(this) : sentPostCallback;
    //this.container.appendChild(btnPost); */
    this.post = null;
}

NewCommentComponent.prototype.onClickSentPostCallback = function () {
    // console.log(post);
    // this.post = post;
    this.post.title = this.inputTitle.value;
    this.post.body = this.inputBody.value;
    this.post = null;
    //this.sentPostCallback({ title: this.inputTitle.value });
    this.sentPostCallback();
}

NewCommentComponent.prototype.show = function (post) {
 /*    this.post = post;
    this.inputTitle.value = this.post.title;
    this.inputBody.value = this.post.body; */
    console.log(this.container);
    this.container.hidden = false;
}


NewCommentComponent.prototype.ocultar = function (post) {
    /*    this.post = post;
       this.inputTitle.value = this.post.title;
       this.inputBody.value = this.post.body; */
       console.log(this.container);
       var obj1 = document.getElementById('obj1');
       obj1.hidden = true;
   }


function cancelar (e) {
    console.log('cerrar');
    
    var obj1 = document.getElementById('obj1');
    this.container.hidden = true;
}