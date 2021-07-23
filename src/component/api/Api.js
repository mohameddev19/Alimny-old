import react from 'react';
import axios from 'axios';

/*
    to see prorating way search about this: <----
*/

////2-sing up page and log in page<----
//in sing up we need this to check if email was extant

async function GetUsersEmail(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function PushUser(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function CheckPassword(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////3-verification page <----

async function GetVerificationCode(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////6-category page,home page and landing page<----
/*
    in all this come next enen line {//end courses req}
    we need in the data :
    course name and picture,teacher name and picture,course seminars number and likes number.
*/

async function like(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unlike(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function save(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unsave(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetSuggestionsCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetRecommendedCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetBestCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetCategoryCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetBestSellingCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetCategories(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetCourseData(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetCourseData(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

//end courses req
///////////////////////////


////7-course page <----

async function GetCourseData(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function like(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unlike(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function save(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unsave(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
//if user.id == woner.id some button well be apperear and we can do this:

async function DropCourse(coureId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function EditCourseData(coureId,data){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function PushLesson(lessonId,data){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////8-seminar page <----

async function GetLessonData(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function PushQuestion(lessonId,question){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function PushAnswer(questionId,answer){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

//if user.id == woner.id some button well be apperear and we can do this

async function DropLesson(lessonId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
//this data combine lesson number that it the lesson id
async function EditLesson(lessonId,data){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
        alert("Make sure the lesson number not belongs to a different lesson")
    }
}

///////////////////////////


////9-teacher page <----

/*
    teacher name
    teacher picture
    teacher pic
    teacher links
    teacher career
    teacher coureses {like data apperear in home and landing}
*/

async function GetTeacherData(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function GetCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function like(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unlike(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function save(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unsave(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////10-search page <----
//in search page we need to get this
//similar data apperear in home and loding

async function GetHomologueCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function like(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unlike(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function save(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}
async function unsave(courseId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////11-setting page <----

//in search page we need to get this
/*
    we need to get and push :
        user name and picture
        user email
        user language
        user type
        user links
        user pay way
        user report
*/

async function GetSetting(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function PushSetting(dataName,data){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////


////12-myCourses page <----

async function GetMyCourses(){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function PushCourse(userId,data){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

async function DropCourse(coureId){
    try {
        const response = await axios.get('');
        return response;
    } catch(error){
        console.error(error);
    }
}

///////////////////////////