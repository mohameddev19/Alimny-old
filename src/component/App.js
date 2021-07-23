import React from 'react';
import {Landing} from './LandingPage';
import {Signup} from './Signup';
import {Login} from './Login';
import {Verification} from './Verification';
import {Verified} from './Verified';
import {Home} from './Home';
import {Search} from './Search';
import {About} from './About';
import {Contact} from './Contact';
import {Support} from './Support';
import {Privacy} from './Privacy';
import {Trems} from './Trems';
import {Cookies} from './Cookies';
import {HelpCenter} from './HelpCenter';
import {MyCourses} from './MyCourses';
import {Course} from './Course';
import {Profile} from './Profile';
import {SeeAll} from './SeeAll';
import {Settings} from './Settings';
import {TeacherProfile} from './TeacherProfile';
import {UploadCourse} from './UploadCourse';
import {Lessons} from './Lessons';
import {Lesson} from './Lesson';
import {Whiteboard} from './Whiteboard';
import {BrowserRouter, Route} from 'react-router-dom';

function Links(){
    return(
        <BrowserRouter>
            <div className="body">
                <Route exact path="/" component={Landing} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/verification" component={Verification} />
                <Route exact path="/verified" component={Verified} />
                <Route exact path="/:userName/home" component={Home} />
                <Route exact path="/search/:id" component={Search} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/trems" component={Trems} />
                <Route exact path="/cookies" component={Cookies} />
                <Route exact path="/help" component={HelpCenter} />
                <Route exact path="/:teacherName/courses" component={MyCourses} />
                <Route exact path="/:courseName/course" component={Course} />
                <Route exact path="/:userName/profile" component={Profile} />
                <Route exact path="/:catalogy/catalogy" component={SeeAll} />
                <Route exact path="/:userName/settings" component={Settings} />
                <Route exact path="/:userName/upload-course" component={UploadCourse} />
                <Route exact path="/:courseName/course/lessons" component={Lessons} />
                <Route exact path="/:courseName/course/:lessonName" component={Lesson} />
                <Route exact path="/:teacherName/whiteboard" component={Whiteboard} />
                {/*TecherProfile well change to teacher course*/}
                <Route exact path="/:teacherName/teacher" component={TeacherProfile} />
                </div>
        </BrowserRouter>
    );
}
export  {Links};