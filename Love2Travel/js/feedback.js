function onReviewSubmit() {
var userNameInput = document.getElementById('userReview');

var tempReview =  userNameInput.value;

localStorage.setItem("userReview",tempReview);
//alert(tempReview);
}