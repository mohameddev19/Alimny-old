import React from 'react';
import {Landing} from './LandingPage';
import {Signup} from './Signup';
import {Login} from './Login';
import {UsedErorr} from './UsedErorr';
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
import {Course} from './Course';
import {SeeAll} from './SeeAll';
import {Settings} from './Settings';
import {TeacherProfile} from './TeacherProfile';
import {UploadCourse} from './UploadCourse';
import {Lessons} from './Lessons';
import {Lesson} from './Lesson';
import {Whiteboard} from './Whiteboard';
import {NotFound} from './NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function Links(){
    return(
        <BrowserRouter>
            <div className="body">
                <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/erorr/:type" component={UsedErorr} />
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
                <Route exact path="/:courseName/course" component={Course} />
                <Route exact path="/:catalogy/catalogy" component={SeeAll} />
                <Route exact path="/:userName/settings" component={Settings} />
                <Route exact path="/:userName/upload-course" component={UploadCourse} />
                <Route exact path="/:courseName/lessons" component={Lessons} />
                <Route exact path="/:courseName/course/:lessonName" component={Lesson} />
                <Route exact path="/:teacherName/whiteboard" component={Whiteboard} />
                {/*TecherProfile will be changed to teacher course -unnesessary :)-*/}
                <Route exact path="/:teacherName/teacher" component={TeacherProfile} />
                <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export  {Links};